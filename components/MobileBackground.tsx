'use client';

export default function MobileBackground() {
  return (
    <div className="mobile-bg">
      <style jsx>{`
        .mobile-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: linear-gradient(
            45deg,
            #4b0082,
            #00ffff,
            #ff00ff,
            #008000,
            #ffa500,
            #ff0000,
            #800080,
            #0000ff,
            #ee82ee,
            #c0c0c0,
            #ffffff,
            #00008b
          );
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}