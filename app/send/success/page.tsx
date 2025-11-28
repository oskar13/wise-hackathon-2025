import Link from "next/link";

export default function SendSuccessPage() {
  return (
    <div className="min-h-screen bg-[#1a3300] flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}


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
      <main className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        {/* 3D Checkmark */}
        <div className="mb-8 relative">
        <img src="/checkmark.png" alt="Success" width={300} height={300} />
        </div>

        {/* Text */}
        <h1 className="text-5xl font-black text-[#9fe870] tracking-tight mb-4" style={{ fontStyle: 'italic' }}>
          ALL SET
        </h1>
        <p className="text-white/90 text-lg text-center max-w-md">
          Your money should arrive <span className="text-[#9fe870] font-medium">in seconds</span>. We&apos;ll keep you posted.
        </p>

        {/* Done Button */}
        <Link
          href="/"
          className="mt-8 px-16 py-4 bg-[#9fe870] text-[#163300] rounded-full text-lg font-semibold hover:bg-[#b5f286] transition-all hover:scale-105"
        >
          Done
        </Link>
      </main>
    </div>
  );
}


