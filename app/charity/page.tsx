export default function CharityPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Charity</h1>
        <p className="text-gray-500 mt-1">Make a difference with your donations</p>
      </header>

      {/* First Donation CTA */}
      <section className="mb-10 relative overflow-hidden bg-gradient-to-br from-[#163300] to-[#1e4400] rounded-2xl p-8 text-white">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9fe870]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9fe870]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Achievement Badge */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-[#9fe870]/20 rounded-full flex items-center justify-center border-4 border-[#9fe870]/30 relative">
              <span className="text-6xl">💝</span>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#9fe870] rounded-full flex items-center justify-center border-4 border-[#163300]">
                <span className="text-lg">🏆</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9fe870] text-[#163300] rounded-full text-sm font-bold mb-4">
              <span>🎯</span>
              <span>UNLOCK ACHIEVEMENT</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">Make Your First Donation</h2>
            <p className="text-white/80 text-lg mb-6 max-w-lg">
              Become a <span className="text-[#9fe870] font-semibold">Generous Heart</span> by making your first charity donation. 
              Help those in need and earn an exclusive achievement badge!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#9fe870] text-[#163300] rounded-full text-lg font-bold hover:bg-[#b5f286] transition-all hover:scale-105 shadow-lg">
                Donate Now
              </button>
              <div className="flex items-center gap-2 text-white/60">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm">+100 Wise Coins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Preview */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
          <p className="text-white/60 text-sm mb-3">Achievement reward preview:</p>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-lg">💎</span>
            </div>
            <div>
              <p className="font-semibold text-[#9fe870]">Generous Heart Badge</p>
              <p className="text-xs text-white/60">Displayed on your profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Charities */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Charities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CharityCard
            name="Red Cross"
            description="Emergency assistance, disaster relief, and humanitarian aid worldwide"
            icon="🏥"
            category="Humanitarian"
          />
          <CharityCard
            name="UNICEF"
            description="Protecting children's rights and providing essential resources"
            icon="👶"
            category="Children"
          />
          <CharityCard
            name="WWF"
            description="Conservation of nature and reduction of threats to biodiversity"
            icon="🐼"
            category="Environment"
          />
          <CharityCard
            name="Doctors Without Borders"
            description="Medical humanitarian assistance in conflict zones"
            icon="⚕️"
            category="Healthcare"
          />
        </div>
      </section>

      {/* More Achievements */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Charity Achievements</h2>
        <div className="border border-gray-200 rounded-xl divide-y divide-gray-100">
          <AchievementRow
            icon="💝"
            name="Generous Heart"
            description="Make your first donation"
            points={100}
            locked
          />
          <AchievementRow
            icon="🌟"
            name="Rising Star"
            description="Donate to 3 different charities"
            points={250}
            locked
          />
          <AchievementRow
            icon="🦸"
            name="Super Giver"
            description="Donate €100 or more in total"
            points={500}
            locked
          />
          <AchievementRow
            icon="👑"
            name="Philanthropy King"
            description="Set up a monthly recurring donation"
            points={1000}
            locked
          />
        </div>
      </section>
    </div>
  );
}

function CharityCard({
  name,
  description,
  icon,
  category,
}: {
  name: string;
  description: string;
  icon: string;
  category: string;
}) {
  return (
    <button className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#9fe870] hover:shadow-md transition-all text-left group">
      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#e8f5e0] transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{category}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-300 group-hover:text-[#9fe870] transition-colors flex-shrink-0 mt-1">
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function AchievementRow({
  icon,
  name,
  description,
  points,
  locked,
}: {
  icon: string;
  name: string;
  description: string;
  points: number;
  locked: boolean;
}) {
  return (
    <div className={`flex items-center justify-between p-4 ${locked ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${locked ? 'bg-gray-100 grayscale' : 'bg-[#e8f5e0]'}`}>
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-900">{name}</p>
            {locked && (
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full">
        <span className="text-sm">⭐</span>
        <span className="text-sm font-semibold">+{points}</span>
      </div>
    </div>
  );
}

