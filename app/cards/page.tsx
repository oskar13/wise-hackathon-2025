export default function CardsPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Cards</h1>
        <p className="text-gray-500 mt-1">Manage your Wise cards</p>
      </header>

      {/* Achievement CTA Banner */}
      <div className="mb-8 p-4 bg-[#e8f5e0] border border-[#9fe870]/30 rounded-xl flex items-center gap-4">
        <div className="w-12 h-12 bg-[#9fe870] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">🌍</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#163300] bg-[#9fe870] px-2 py-0.5 rounded-full">
              ACHIEVEMENT
            </span>
          </div>
          <p className="font-semibold text-[#163300] mt-1">Globe Trotter</p>
          <p className="text-sm text-[#163300]/70">Use your card in another country to unlock this achievement and earn 50 bonus points!</p>
        </div>
        <button className="px-4 py-2 bg-[#163300] text-white rounded-full text-sm font-semibold hover:bg-[#1e4400] transition-colors flex-shrink-0">
          Learn more
        </button>
        <button className="p-1.5 hover:bg-[#9fe870]/30 rounded-full transition-colors flex-shrink-0">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#163300]/60">
            <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.41z"/>
          </svg>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Physical Card */}
        <div className="relative">
          <div className="bg-[#163300] rounded-2xl p-6 text-white aspect-[1.6/1] flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#9fe870] text-sm font-medium">Physical Card</p>
                <p className="text-white/60 text-xs mt-1">Debit</p>
              </div>
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#eb001b"/>
                <circle cx="26" cy="14" r="14" fill="#f79e1b" fillOpacity="0.8"/>
              </svg>
            </div>
            <div>
              <p className="font-mono text-lg tracking-wider mb-2">•••• •••• •••• 4829</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-xs">Card holder</p>
                  <p className="text-sm">JOHN DOE</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-xs">Expires</p>
                  <p className="text-sm">09/28</p>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute -top-2 -right-2 px-2 py-1 bg-[#9fe870] text-[#163300] text-xs font-semibold rounded-full">
            Active
          </span>
        </div>

        {/* Digital Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white aspect-[1.6/1] flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#9fe870] text-sm font-medium">Digital Card</p>
                <p className="text-white/60 text-xs mt-1">Debit</p>
              </div>
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#eb001b"/>
                <circle cx="26" cy="14" r="14" fill="#f79e1b" fillOpacity="0.8"/>
              </svg>
            </div>
            <div>
              <p className="font-mono text-lg tracking-wider mb-2">•••• •••• •••• 7156</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-xs">Card holder</p>
                  <p className="text-sm">JOHN DOE</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-xs">Expires</p>
                  <p className="text-sm">11/27</p>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute -top-2 -right-2 px-2 py-1 bg-[#9fe870] text-[#163300] text-xs font-semibold rounded-full">
            Active
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction icon={<FreezeIcon />} label="Freeze card" />
          <QuickAction icon={<PinIcon />} label="View PIN" />
          <QuickAction icon={<LimitsIcon />} label="Spending limits" />
          <QuickAction icon={<SettingsIcon />} label="Card settings" />
        </div>
      </section>

      {/* Card Settings */}
      <section className="border border-gray-200 rounded-xl divide-y divide-gray-100">
        <SettingRow
          icon={<OnlineIcon />}
          title="Online payments"
          description="Pay online with your card"
          enabled={true}
        />
        <SettingRow
          icon={<ContactlessIcon />}
          title="Contactless payments"
          description="Tap to pay in stores"
          enabled={true}
        />
        <SettingRow
          icon={<AtmIcon />}
          title="ATM withdrawals"
          description="Withdraw cash from ATMs"
          enabled={true}
        />
        <SettingRow
          icon={<SwipeIcon />}
          title="Swipe payments"
          description="Magnetic stripe transactions"
          enabled={false}
        />
      </section>

      {/* Order New Card */}
      <section className="mt-8">
        <button className="flex items-center gap-3 px-5 py-4 border border-dashed border-gray-300 rounded-xl w-full hover:border-gray-400 hover:bg-gray-50 transition-colors group">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900">Order a new card</p>
            <p className="text-sm text-gray-500">Get a physical or digital card</p>
          </div>
        </button>
      </section>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all group">
      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
        {icon}
      </span>
      <span className="text-sm text-gray-700 font-medium">{label}</span>
    </button>
  );
}

function SettingRow({ 
  icon, 
  title, 
  description, 
  enabled 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
          {icon}
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultChecked={enabled} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9fe870]"></div>
      </label>
    </div>
  );
}

function FreezeIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" strokeLinecap="round"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <circle cx="12" cy="16" r="1"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  );
}

function LimitsIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  );
}

function OnlineIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

function ContactlessIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M8.5 14.5A5 5 0 0112 13a5 5 0 013.5 1.5M6 12a8 8 0 016-2.5 8 8 0 016 2.5M3.5 9.5a11 11 0 018.5-3 11 11 0 018.5 3"/>
    </svg>
  );
}

function AtmIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <path d="M12 10v4M9 12h6"/>
    </svg>
  );
}

function SwipeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 10h18"/>
    </svg>
  );
}

