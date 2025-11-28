"use client";

import { useState } from "react";

type Achievement = {
  id: string;
  name: string;
  description: string;
  trigger: string;
  icon: string;
  coins: number;
  unlocked: boolean;
  unlockedDate?: string;
};

type Category = {
  name: string;
  icon: string;
  achievements: Achievement[];
};

const achievementCategories: Category[] = [
  {
    name: "Transfers & Global Usage",
    icon: "🌍",
    achievements: [
      {
        id: "first-flight",
        name: "First Flight",
        description: "Your money just crossed its first border—nice!",
        trigger: "Make your first international transfer",
        icon: "✈️",
        coins: 50,
        unlocked: true,
        unlockedDate: "Nov 15, 2025",
      },
      {
        id: "jet-setter",
        name: "Global Citizen",
        description: "You're becoming a true global citizen!",
        trigger: "Spend money in 3 different currencies",
        icon: "🌎",
        coins: 100,
        unlocked: true,
        unlockedDate: "Nov 20, 2025",
      },
      {
        id: "continental-collector",
        name: "Continental Collector",
        description: "Your transfers have reached 4 continents!",
        trigger: "Make transfers to 4 different continents",
        icon: "🗺️",
        coins: 200,
        unlocked: true,
        unlockedDate: "Nov 28, 2025",
      },
      {
        id: "globe-trotter",
        name: "Globe Trotter",
        description: "Spending abroad like a local!",
        trigger: "Make a payment while you are abroad",
        icon: "🌐",
        coins: 75,
        unlocked: false,
      },
    ],
  },
  {
    name: "Charity & Social Impact",
    icon: "💝",
    achievements: [
      {
        id: "first-giver",
        name: "The First Giver",
        description: "A little money, a big impact. Thank you for giving!",
        trigger: "Make your first donation to a charity via Wise",
        icon: "🎁",
        coins: 100,
        unlocked: false,
      },
      {
        id: "global-goodwill",
        name: "Global Goodwill",
        description: "Your generosity knows no borders!",
        trigger: "Donate to a charity in another country",
        icon: "🌟",
        coins: 150,
        unlocked: false,
      },
    ],
  },
  {
    name: "Cards & Spending",
    icon: "💳",
    achievements: [
      {
        id: "card-away",
        name: "Card Away",
        description: "Your card is on its way—get ready to spend like a local anywhere.",
        trigger: "Order your first Wise card",
        icon: "📬",
        coins: 50,
        unlocked: true,
        unlockedDate: "Oct 5, 2025",
      },
      {
        id: "first-swipe",
        name: "The First Swipe",
        description: "First purchase complete—many more to come!",
        trigger: "Make your first Wise card purchase",
        icon: "💸",
        coins: 50,
        unlocked: true,
        unlockedDate: "Oct 12, 2025",
      },
    ],
  },
  {
    name: "Bill Splitting",
    icon: "🧾",
    achievements: [
      {
        id: "split-starter",
        name: "The Split Starter",
        description: "Shared bill, shared chill.",
        trigger: "Initiate your first bill split in Wise",
        icon: "✂️",
        coins: 50,
        unlocked: false,
      },
    ],
  },
];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const totalAchievements = achievementCategories.reduce(
    (acc, cat) => acc + cat.achievements.length,
    0
  );
  const unlockedAchievements = achievementCategories.reduce(
    (acc, cat) => acc + cat.achievements.filter((a) => a.unlocked).length,
    0
  );
  const totalCoins = achievementCategories.reduce(
    (acc, cat) =>
      acc + cat.achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.coins, 0),
    0
  );

  const filteredCategories = selectedCategory
    ? achievementCategories.filter((cat) => cat.name === selectedCategory)
    : achievementCategories;

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
        <p className="text-gray-500 mt-1">Track your progress and earn Wise Coins</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#e8f5e0] rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-[#163300]">
            {unlockedAchievements}/{totalAchievements+56}
          </p>
          <p className="text-sm text-[#163300]/70">Unlocked</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-amber-700">{totalCoins}</p>
          <p className="text-sm text-amber-700/70">Wise Coins Earned</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-blue-700">
            {Math.round((unlockedAchievements / totalAchievements) * 100)}%
          </p>
          <p className="text-sm text-blue-700/70">Completion</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === null
              ? "bg-[#163300] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {achievementCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              selectedCategory === cat.name
                ? "bg-[#163300] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Achievement Categories */}
      <div className="space-y-8">
        {filteredCategories.map((category) => (
          <section key={category.name}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
              <span className="text-sm text-gray-500">
                {category.achievements.filter((a) => a.unlocked).length}/
                {category.achievements.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={`relative p-5 rounded-xl border transition-all ${
        achievement.unlocked
          ? "bg-white border-[#9fe870] shadow-sm"
          : "bg-gray-50 border-gray-200 opacity-70"
      }`}
    >
      {/* Unlocked Badge */}
      {achievement.unlocked && (
        <div className="absolute -top-2 -right-2 px-2 py-1 bg-[#9fe870] text-[#163300] text-xs font-bold rounded-full">
          ✓ Unlocked
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
            achievement.unlocked ? "bg-[#e8f5e0]" : "bg-gray-100 grayscale"
          }`}
        >
          {achievement.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
            {!achievement.unlocked && (
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
          <p className="text-xs text-gray-400 mb-3">
            <span className="font-medium">How:</span> {achievement.trigger}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-50 text-amber-700 rounded-full">
              <span className="text-xs">🪙</span>
              <span className="text-xs font-semibold">+{achievement.coins} coins</span>
            </div>
            {achievement.unlocked && achievement.unlockedDate && (
              <span className="text-xs text-gray-400">{achievement.unlockedDate}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

