'use client';

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useScrollContext } from "@/context/ScrollContext";

const Scene = () => {
  const cameraRef = useRef<any>(null);
  const { scrollProgress } = useScrollContext();

  // Map scroll progress to sections (0-1 range)
  // We'll divide into 11 sections (Hero through Contact) plus footer
  const sectionProgress = Math.min(scrollProgress * 11, 10); // 0-10 range
  const sectionIndex: number = Math.floor(sectionProgress);
  const subsectionProgress: number = sectionProgress - sectionIndex; // 0-1 within section

  useFrame((state, delta) => {
    // Evolve scene based on scroll progress
    if (cameraRef.current) {
      // Base rotation speed
      const baseRotationSpeed = 0.1;

      // Vary rotation based on section
      let rotationSpeed = baseRotationSpeed;
      switch (sectionIndex) {
        case 0: // Hero - slow rotation
          rotationSpeed = baseRotationSpeed * 0.5;
          break;
        case 1: // Services - medium rotation
          rotationSpeed = baseRotationSpeed * 0.8;
          break;
        case 2: // WhyChooseUs - fast rotation
          rotationSpeed = baseRotationSpeed * 1.2;
          break;
        case 3: // Portfolio - oscillating
          rotationSpeed = baseRotationSpeed * Math.sin(subsectionProgress * Math.PI * 2) * 0.5;
          break;
        case 4: // CaseStudies - accelerating
          rotationSpeed = baseRotationSpeed * (0.5 + subsectionProgress * 1.5);
          break;
        case 5: // Stats - decelerating
          rotationSpeed = baseRotationSpeed * (1.5 - subsectionProgress * 1);
          break;
        case 6: // Testimonials - back and forth
          rotationSpeed = baseRotationSpeed * Math.cos(subsectionProgress * Math.PI * 4) * 0.3;
          break;
        case 7: // Process - spiral motion
          rotationSpeed = baseRotationSpeed * 0.7;
          // Add vertical movement (we'll store this in ref to avoid direct mutation)
          if (!cameraRef.current.userData) {
            cameraRef.current.userData = { offsetY: 0 };
          }
          cameraRef.current.userData.offsetY = Math.sin(subsectionProgress * Math.PI * 2) * 0.5;
          break;
        case 8: // Pricing - zoom effect
          rotationSpeed = baseRotationSpeed * 0.9;
          if (!cameraRef.current.userData) {
            cameraRef.current.userData = { offsetZ: 0 };
          }
          cameraRef.current.userData.offsetZ = Math.sin(subsectionProgress * Math.PI) * 2;
          break;
        case 9: // FAQ - complex motion
          rotationSpeed = baseRotationSpeed * 1.1;
          if (!cameraRef.current.userData) {
            cameraRef.current.userData = { offsetX: 0, offsetZ: 0 };
          }
          cameraRef.current.userData.offsetX = Math.sin(subsectionProgress * Math.PI * 3) * 1.5;
          cameraRef.current.userData.offsetZ = Math.cos(subsectionProgress * Math.PI * 2) * 1.5;
          break;
        case 10: // Contact - settle
          rotationSpeed = baseRotationSpeed * (1.2 - subsectionProgress * 0.8);
          break;
        default: // Footer
          rotationSpeed = baseRotationSpeed * 0.3;
          break;
      }

      // Apply rotations
      cameraRef.current.rotation.y += delta * rotationSpeed;

      // Also slowly rotate on x axis for more dynamic feel
      cameraRef.current.rotation.x += delta * 0.02;

      // Apply positional offsets from userData
      if (cameraRef.current.userData) {
        cameraRef.current.position.y = cameraRef.current.userData.offsetY || 0;
        cameraRef.current.position.z = (cameraRef.current.userData.offsetZ || 0) + 5; // Base Z position
        cameraRef.current.position.x = cameraRef.current.userData.offsetX || 0;
      } else {
        // Default position
        cameraRef.current.position.set(0, 0, 5);
      }
    }
  });

  return (
    <>
      {/* Ambient light that changes color based on section */}
      <ambientLight intensity={0.5} color={getSectionColor(sectionIndex, subsectionProgress)} />
      <directionalLight position={[10, 10, 5]} intensity={1} color={getSectionColor(sectionIndex, subsectionProgress, true)} />

      {/* Main visual elements that evolve by section */}
      <group>
        {/* Base geometry that changes based on section */}
        {getSectionGeometry(sectionIndex, subsectionProgress)}
      </group>
    </>
  );
};

// Helper function to get colors for each section
function getSectionColor(sectionIndex: number, subsectionProgress: number, isDirectional = false) {
  const colors = [
    // Hero - deep purple to blue
    { start: 0x4b0082, end: 0x1e3a8a }, // indigo to blue
    // Services - cyan to teal
    { start: 0x00ffff, end: 0x008080 },
    // WhyChooseUs - magenta to pink
    { start: 0xff00ff, end: 0xff69b4 },
    // Portfolio - green to lime
    { start: 0x008000, end: 0x32cd32 },
    // CaseStudies - orange to yellow
    { start: 0xffa500, end: 0xffff00 },
    // Stats - red to purple
    { start: 0xff0000, end: 0x800080 },
    // Testimonials - blue to cyan
    { start: 0x0000ff, end: 0x00ffff },
    // Process - violet to indigo
    { start: 0xee82ee, end: 0x4b0082 },
    // Pricing - silver to gold
    { start: 0xc0c0c0, end: 0xffd700 },
    // FAQ - rainbow cycling
    { start: 0xff0000, end: 0x0000ff }, // Will be handled specially
    // Contact - white to light blue
    { start: 0xffffff, end: 0xadd8e6 },
    // Footer - dark blue to black
    { start: 0x00008b, end: 0x000000 }
  ];

  const { start, end } = colors[Math.min(sectionIndex, colors.length - 1)];

  // Special handling for FAQ rainbow effect
  if (sectionIndex === 9) {
    const hue = (subsectionProgress * 360) % 360;
    // Convert HSL to hex for Three.js
    return hslToHex(hue, 80, 50);
  }

  // Normal color interpolation
  const r = (start >> 16) & 0xff;
  const g = (start >> 8) & 0xff;
  const b = start & 0xff;

  const rEnd = (end >> 16) & 0xff;
  const gEnd = (end >> 8) & 0xff;
  const bEnd = end & 0xff;

  const rFinal = Math.round(r + (rEnd - r) * subsectionProgress);
  const gFinal = Math.round(g + (gEnd - g) * subsectionProgress);
  const bFinal = Math.round(b + (bEnd - b) * subsectionProgress);

  // Return as hex color that Three.js can understand
  return (rFinal << 16) | (gFinal << 8) | bFinal;
}

// Helper function to convert HSL to hex
function hslToHex(h: number, s: number, l: number): number {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c/2;

  let r = 0, g = 0, b = 0;
  if (h < 60) {
    r = c; g = x; b = 0;
  } else if (h < 120) {
    r = x; g = c; b = 0;
  } else if (h < 180) {
    r = 0; g = c; b = x;
  } else if (h < 240) {
    r = 0; g = x; b = c;
  } else if (h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  const toHex = (value: number) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return parseInt(toHex(r) + toHex(g) + toHex(b), 16);
}

// Helper function to get geometry for each section
function getSectionGeometry(sectionIndex: number, subsectionProgress: number) {
  // Different geometries for different sections
  switch (sectionIndex) {
    case 0: // Hero - particle system
      return (
        <>
          {/* Will implement particle system later */}
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="orange"
              wireframe={true}
              opacity={0.3}
              transparent
            />
          </mesh>
        </>
      );
    case 1: // Services - network nodes
      return (
        <>
          <mesh>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="cyan" />
          </mesh>
          {/* Add some nodes around */}
          {[...Array(6)].map((_, i) => (
            <mesh key={i}
              position={[
                Math.cos((i / 6) * Math.PI * 2) * 1.5,
                Math.sin((i / 6) * Math.PI * 2) * 1.5,
                0
              ]}
            >
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          ))}
        </>
      );
    case 2: // WhyChooseUs - floating shapes
      return (
        <>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="magenta" />
          </mesh>
        </>
      );
    case 3: // Portfolio - grid
      return (
        <>
          <mesh>
            <planeGeometry args={[2, 2, 10, 10]} />
            <meshStandardMaterial color="green" wireframe />
          </mesh>
        </>
      );
    case 4: // CaseStudies - cylinders
      return (
        <>
          <mesh>
            <cylinderGeometry args={[0.5, 1, 8]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </>
      );
    case 5: // Stats - rings
      return (
        <>
          <mesh>
            <torusGeometry args={[0.8, 0.2, 8, 16]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </>
      );
    case 6: // Testimonials - icosahedron
      return (
        <>
          <mesh>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </>
      );
    case 7: // Process - pyramid
      return (
        <>
          <mesh>
            <coneGeometry args={[1, 2, 4]} />
            <meshStandardMaterial color="violet" />
          </mesh>
        </>
      );
    case 8: // Pricing - double pyramid
      return (
        <>
          <mesh>
            <coneGeometry args={[1, 1, 4]} />
            <meshStandardMaterial color="silver" />
          </mesh>
          <mesh
            rotation={[Math.PI, 0, 0]}
          >
            <coneGeometry args={[1, 1, 4]} />
            <meshStandardMaterial color="silver" />
          </mesh>
        </>
      );
    case 9: // FAQ - torus knot
      return (
        <>
          <mesh>
            <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
            <meshStandardMaterial
              color={getSectionColor(9, subsectionProgress)}
              wireframe={true}
            />
          </mesh>
        </>
      );
    case 10: // Contact - connected spheres
      return (
        <>
          <mesh>
            <sphereGeometry args={[0.8, 16, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
          {/* Add smaller spheres around */}
          {[...Array(4)].map((_, i) => (
            <mesh key={i}
              position={[
                Math.cos((i / 4) * Math.PI * 2) * 1.2,
                Math.sin((i / 4) * Math.PI * 2) * 1.2,
                0
              ]}
            >
              <sphereGeometry args={[0.3, 12, 12]} />
              <meshStandardMaterial color="white" opacity={0.6} transparent />
            </mesh>
          ))}
        </>
      );
    default: // Footer - simple sphere
      return (
        <>
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="darkblue" opacity={0.2} transparent />
          </mesh>
        </>
      );
  }
}

const ThreeJSBackground = () => {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeJSBackground;