export default function Home() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Wise</h1>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400">
              <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9l-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">
        <a
          href="/send"
          className="px-5 py-2.5 bg-[#9fe870] text-[#163300] rounded-full text-sm font-semibold hover:bg-[#8fd960] transition-colors inline-flex items-center justify-center"
        >
          Send
        </a>
        <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
          Add money
        </button>
      </div>

      {/* Achievements progress bar */}
      <section className="mb-8 p-5 border border-gray-200 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <span className="font-semibold text-gray-900">Achievements</span>
          </div>
          <span className="text-sm text-gray-500">20 of 65 completed</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#9fe870] rounded-full transition-all duration-500"
            style={{ width: `${(20 / 65) * 100}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">Complete achievements to unlock rewards</p>
      </section>


      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <FeatureCard
          icon={<GlobeIcon />}
          title="Add a currency to your account"
        />
        <FeatureCard
          icon={<CardIcon />}
          title="Spend and withdraw abroad"
        />
        <FeatureCard
          icon={<BankIcon />}
          title="Get account details to get paid"
        />
      </div>

      {/* Referral Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Wise, earn rewards</h2>
        <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] max-w-md">
          <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z"/>
            </svg>
          </button>
          <div className="p-6 pb-0">
            <h3 className="text-[#9fe870] text-2xl font-bold leading-tight">
              SHARE WISE,<br/>EARN REWARDS
            </h3>
          </div>
          <div className="h-40 bg-gradient-to-t from-[#3d3d2d] to-[#1a1a1a] flex items-end justify-center">
            <div className="flex items-end gap-2 mb-0">
              <div className="w-20 h-24 bg-gray-600 rounded-t-full"></div>
              <div className="w-16 h-20 bg-gray-500 rounded-t-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <button className="flex flex-col items-start p-5 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all text-left group min-h-[180px]">
      <div className="relative mb-auto">
        <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-gray-300 transition-colors">
          {icon}
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#9fe870] rounded-full flex items-center justify-center">
          <svg width="12" height="12" fill="#163300" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" stroke="#163300" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <p className="font-medium text-gray-900 text-[15px] leading-snug">{title}</p>
    </button>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
    </svg>
  );
}
