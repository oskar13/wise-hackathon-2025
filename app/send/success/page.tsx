"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Generate random coins for the rain effect
const generateCoins = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
    size: 20 + Math.random() * 20,
  }));
};

export default function SendSuccessPage() {
  const [mounted, setMounted] = useState(false);
  const [coins] = useState(() => generateCoins(20));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a3300] flex flex-col overflow-hidden relative">
      {/* Spinning Ray Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/ray.png"
          alt=""
          className={`w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] object-contain animate-ray-spin transition-opacity duration-1000 ${
            mounted ? "opacity-40" : "opacity-0"
          }`}
        />
      </div>

      {/* Confetti Left Side */}
      <div
        className={`absolute left-0 bottom-0 w-64 md:w-80 transition-transform duration-1000 ease-out ${
          mounted ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <img
          src="/confetti.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Confetti Right Side (Mirrored) */}
      <div
        className={`absolute right-0 bottom-0 w-64 md:w-80 transition-transform duration-1000 ease-out ${
          mounted ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionDelay: "0.4s", transform: mounted ? "scaleX(-1)" : "scaleX(-1) translateY(100%)" }}
      >
        <img
          src="/confetti.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Coins Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute animate-coin-fall"
            style={{
              left: `${coin.left}%`,
              animationDelay: `${coin.delay}s`,
              animationDuration: `${coin.duration}s`,
            }}
          >
            <div
              className="animate-coin-spin"
              style={{
                width: coin.size,
                height: coin.size,
              }}
            >
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-lg">
                <circle cx="20" cy="20" r="18" fill="url(#coinGradient)" stroke="#b8860b" strokeWidth="2" />
                <circle cx="20" cy="20" r="14" stroke="#ffd700" strokeWidth="1" opacity="0.5" />
                <text x="20" y="25" textAnchor="middle" fill="#b8860b" fontSize="14" fontWeight="bold">€</text>
                <defs>
                  <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#ffec8b" />
                    <stop offset="100%" stopColor="#daa520" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <img src="/logo.svg" alt="Wise" width={90} height={22} className="brightness-0 invert opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(47%) saturate(432%) hue-rotate(43deg) brightness(101%) contrast(92%)" }} />

        <Link
          href="/"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg width="24" height="24" fill="none" stroke="#9fe870" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 -mt-16 relative z-10">
        {/* 3D Checkmark */}
        <div
          className={`mb-8 relative transition-all duration-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <img src="/checkmark.png" alt="Success" width={300} height={300} />
        </div>

        {/* Text */}
        <h1
          className={`text-5xl font-black text-[#9fe870] tracking-tight mb-4 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontStyle: "italic", transitionDelay: "0.3s" }}
        >
          ALL SET
        </h1>
        <p
          className={`text-white/90 text-lg text-center max-w-md transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          Your money should arrive <span className="text-[#9fe870] font-medium">in seconds</span>. We&apos;ll keep you posted.
        </p>

        {/* Achievement Notification */}
        <div
          className={`mt-8 w-full max-w-xl transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="relative bg-gradient-to-r from-[#2d4a1c] via-[#1a3300] to-[#2d4a1c] rounded-2xl p-5 border border-[#3d5a2c] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#3d5a2c] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute right-16 bottom-0 w-24 h-24 bg-[#3d5a2c] rounded-full translate-y-1/2 opacity-30" />

            {/* Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#9fe870] rounded-full">
                <span className="text-sm">🎯</span>
                <span className="text-[#163300] text-sm font-bold tracking-wide">UNLOCKED ACHIEVEMENT</span>
              </div>
            </div>

            <div className="flex items-center gap-5 relative z-10">
              {/* Globe Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-full bg-[#2a4a1a] border-4 border-[#3d5a2c] flex items-center justify-center">
                  <span className="text-4xl">🌍</span>
                </div>
                {/* Trophy badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#9fe870] rounded-full flex items-center justify-center border-2 border-[#1a3300]">
                  <span className="text-base">🏆</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">Continental Collector</h3>
                <p className="text-white/70 text-sm mb-3">
                  You have made transfers to 4 different continents.
                </p>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" fill="#9fe870" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-[#9fe870] font-medium">+100 Wise Coins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Done Button */}
        <Link
          href="/achievements"
          className={`mt-8 px-16 py-4 bg-[#9fe870] text-[#163300] rounded-full text-lg font-semibold hover:bg-[#b5f286] transition-all hover:scale-105 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          Done
        </Link>
      </main>

      <style jsx>{`
        @keyframes coin-fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0.7;
          }
        }

        @keyframes coin-spin {
          0%, 100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
        }

        @keyframes ray-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-coin-fall {
          animation: coin-fall linear infinite;
        }

        .animate-coin-spin {
          animation: coin-spin 0.6s ease-in-out infinite;
        }

        .animate-ray-spin {
          animation: ray-spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
