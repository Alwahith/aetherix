"use client";

import dynamic from "next/dynamic";

const ThreeJSBackgroundDynamic = dynamic(() => import("@/components/ThreeJSBackground"), {
  loading: () => <div className="h-[100vh] bg-[#09090f]" />, // Show dark background while loading
  ssr: false, // Only load on client side
});

export default function ThreeJSBackgroundClient() {
  return <ThreeJSBackgroundDynamic />;
}