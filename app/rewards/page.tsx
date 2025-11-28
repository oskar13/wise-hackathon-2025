"use client";

import { useState } from "react";

type Reward = {
  id: string;
  name: string;
  description: string;
  brand: string;
  brandLogo: string;
  category: string;
  discount: string;
  coinsRequired: number;
  originalValue: string;
  featured?: boolean;
  expiresIn?: string;
};

const categories = [
  { id: "all", name: "All Rewards", icon: "🎁" },
  { id: "wise", name: "Wise Exclusive", icon: "💚" },
  { id: "flights", name: "Flights", icon: "✈️" },
  { id: "hotels", name: "Hotels", icon: "🏨" },
  { id: "subscriptions", name: "Subscriptions", icon: "📱" },
  { id: "shopping", name: "Shopping", icon: "🛍️" },
  { id: "food", name: "Food & Dining", icon: "🍔" },
  { id: "experiences", name: "Experiences", icon: "🎭" },
];

const rewards: Reward[] = [
  // Wise Exclusive
  {
    id: "wise-transfer-discount",
    name: "10% Discount on Transfer Fees",
    description: "Save on your next 5 international transfers",
    brand: "Wise",
    brandLogo: "💸",
    category: "wise",
    discount: "10% OFF",
    coinsRequired: 300,
    originalValue: "€5-20",
    featured: true,
  },
  {
    id: "wise-custom-card",
    name: "Custom Design for Debit Card",
    description: "Personalize your Wise card with exclusive designs",
    brand: "Wise",
    brandLogo: "💳",
    category: "wise",
    discount: "EXCLUSIVE",
    coinsRequired: 500,
    originalValue: "€10",
    featured: true,
  },
  {
    id: "wise-tshirt",
    name: "Wise T-Shirt",
    description: "Premium cotton tee with Wise branding",
    brand: "Wise",
    brandLogo: "👕",
    category: "wise",
    discount: "MERCH",
    coinsRequired: 800,
    originalValue: "€25",
    featured: true,
  },
  // Flights
  {
    id: "ryanair-10",
    name: "€10 Off Your Next Flight",
    description: "Valid on any Ryanair booking over €50",
    brand: "Ryanair",
    brandLogo: "✈️",
    category: "flights",
    discount: "€10 OFF",
    coinsRequired: 500,
    originalValue: "€10",
  },
  {
    id: "easyjet-15",
    name: "15% Off Flight Booking",
    description: "Discount on easyJet flights across Europe",
    brand: "easyJet",
    brandLogo: "🛫",
    category: "flights",
    discount: "15% OFF",
    coinsRequired: 750,
    originalValue: "€15-30",
  },
  {
    id: "lufthansa-20",
    name: "€20 Flight Voucher",
    description: "Use on Lufthansa flights worldwide",
    brand: "Lufthansa",
    brandLogo: "🦅",
    category: "flights",
    discount: "€20 OFF",
    coinsRequired: 1000,
    originalValue: "€20",
  },
  // Hotels
  {
    id: "booking-10",
    name: "10% Off Hotel Stays",
    description: "Valid at participating hotels worldwide",
    brand: "Booking.com",
    brandLogo: "🏨",
    category: "hotels",
    discount: "10% OFF",
    coinsRequired: 400,
    originalValue: "€10-50",
  },
  {
    id: "airbnb-25",
    name: "€25 Airbnb Credit",
    description: "For stays or experiences",
    brand: "Airbnb",
    brandLogo: "🏠",
    category: "hotels",
    discount: "€25 OFF",
    coinsRequired: 1200,
    originalValue: "€25",
  },
  {
    id: "hilton-free",
    name: "Free Night Upgrade",
    description: "Upgrade to next room category",
    brand: "Hilton",
    brandLogo: "🌟",
    category: "hotels",
    discount: "FREE",
    coinsRequired: 800,
    originalValue: "€50+",
  },
  // Subscriptions
  {
    id: "spotify-1m",
    name: "1 Month Free Premium",
    description: "Ad-free music streaming",
    brand: "Spotify",
    brandLogo: "🎵",
    category: "subscriptions",
    discount: "FREE",
    coinsRequired: 500,
    originalValue: "€10.99",
  },
  {
    id: "netflix-50",
    name: "50% Off First Month",
    description: "Any Netflix plan",
    brand: "Netflix",
    brandLogo: "🎬",
    category: "subscriptions",
    discount: "50% OFF",
    coinsRequired: 300,
    originalValue: "€8-17",
  },
  {
    id: "youtube-3m",
    name: "3 Months YouTube Premium",
    description: "Ad-free videos & YouTube Music",
    brand: "YouTube",
    brandLogo: "▶️",
    category: "subscriptions",
    discount: "FREE",
    coinsRequired: 1500,
    originalValue: "€35.97",
  },
  {
    id: "duolingo-1y",
    name: "1 Year Duolingo Plus",
    description: "Learn languages ad-free",
    brand: "Duolingo",
    brandLogo: "🦉",
    category: "subscriptions",
    discount: "FREE",
    coinsRequired: 2000,
    originalValue: "€89.99",
  },
  // Shopping
  {
    id: "amazon-10",
    name: "€10 Amazon Gift Card",
    description: "Shop millions of products",
    brand: "Amazon",
    brandLogo: "📦",
    category: "shopping",
    discount: "€10",
    coinsRequired: 500,
    originalValue: "€10",
  },
  {
    id: "zalando-15",
    name: "15% Off Fashion",
    description: "On orders over €75",
    brand: "Zalando",
    brandLogo: "👗",
    category: "shopping",
    discount: "15% OFF",
    coinsRequired: 600,
    originalValue: "€15+",
  },
  {
    id: "ikea-20",
    name: "€20 IKEA Voucher",
    description: "For furniture & home goods",
    brand: "IKEA",
    brandLogo: "🪑",
    category: "shopping",
    discount: "€20",
    coinsRequired: 1000,
    originalValue: "€20",
  },
  // Food & Dining
  {
    id: "uber-eats-5",
    name: "€5 Off Your Order",
    description: "Min. order €15",
    brand: "Uber Eats",
    brandLogo: "🍕",
    category: "food",
    discount: "€5 OFF",
    coinsRequired: 250,
    originalValue: "€5",
  },
  {
    id: "deliveroo-free",
    name: "Free Delivery for 1 Month",
    description: "Unlimited free deliveries",
    brand: "Deliveroo",
    brandLogo: "🛵",
    category: "food",
    discount: "FREE",
    coinsRequired: 400,
    originalValue: "€12+",
  },
  {
    id: "starbucks-10",
    name: "€10 Starbucks Card",
    description: "Reload your Starbucks account",
    brand: "Starbucks",
    brandLogo: "☕",
    category: "food",
    discount: "€10",
    coinsRequired: 500,
    originalValue: "€10",
  },
  // Experiences
  {
    id: "museum-2for1",
    name: "2-for-1 Museum Entry",
    description: "At 500+ museums across Europe",
    brand: "Museum Pass",
    brandLogo: "🏛️",
    category: "experiences",
    discount: "2 FOR 1",
    coinsRequired: 300,
    originalValue: "€10-25",
  },
  {
    id: "spa-20",
    name: "20% Off Spa Day",
    description: "Relax at premium spas",
    brand: "Treatwell",
    brandLogo: "💆",
    category: "experiences",
    discount: "20% OFF",
    coinsRequired: 700,
    originalValue: "€20-50",
  },
];

export default function RewardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userCoins] = useState(1250); // Mock user balance

  const filteredRewards =
    selectedCategory === "all"
      ? rewards
      : rewards.filter((r) => r.category === selectedCategory);

  const featuredRewards = rewards.filter((r) => r.featured);

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Rewards</h1>
        <p className="text-gray-500 mt-1">Redeem your Wise Coins for exclusive discounts</p>
      </header>

      {/* Coins Balance Card */}
      <div className="bg-gradient-to-r from-[#163300] to-[#2d5a00] rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 bg-[#9fe870]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute right-24 bottom-0 w-32 h-32 bg-[#9fe870]/10 rounded-full translate-y-1/2" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white/70 text-sm mb-1">Your Balance</p>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🪙</span>
              <span className="text-5xl font-bold">{userCoins.toLocaleString()}</span>
              <span className="text-xl text-white/70">Wise Coins</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-[#9fe870] text-[#163300] rounded-full font-semibold hover:bg-[#b5f286] transition-colors">
              Earn More Coins
            </button>
            <button className="px-5 py-2.5 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors">
              History
            </button>
          </div>
        </div>
      </div>

      {/* Featured Rewards */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>⭐</span> Featured Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredRewards.map((reward) => (
            <FeaturedRewardCard key={reward.id} reward={reward} userCoins={userCoins} />
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              selectedCategory === cat.id
                ? "bg-[#163300] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* All Rewards Grid */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedCategory === "all"
            ? "All Rewards"
            : categories.find((c) => c.id === selectedCategory)?.name}
          <span className="text-gray-400 font-normal ml-2">({filteredRewards.length})</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} userCoins={userCoins} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturedRewardCard({ reward, userCoins }: { reward: Reward; userCoins: number }) {
  const canAfford = userCoins >= reward.coinsRequired;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 hover:shadow-lg transition-all group">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{reward.brandLogo}</span>
        <span className="text-sm font-medium text-gray-600">{reward.brand}</span>
      </div>
      <div className="mb-2">
        <span className="inline-block px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded">
          {reward.discount}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{reward.name}</h3>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1">
          <span className="text-sm">🪙</span>
          <span className={`text-sm font-bold ${canAfford ? "text-[#163300]" : "text-gray-400"}`}>
            {reward.coinsRequired}
          </span>
        </div>
        <button
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            canAfford
              ? "bg-[#9fe870] text-[#163300] hover:bg-[#8fd960]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!canAfford}
        >
          {canAfford ? "Redeem" : "Need more"}
        </button>
      </div>
    </div>
  );
}

function RewardCard({ reward, userCoins }: { reward: Reward; userCoins: number }) {
  const canAfford = userCoins >= reward.coinsRequired;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#9fe870] hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#e8f5e0] transition-colors">
            {reward.brandLogo}
          </div>
          <div>
            <p className="font-medium text-gray-900">{reward.brand}</p>
            <p className="text-xs text-gray-500">{reward.category}</p>
          </div>
        </div>
        <span className="px-2 py-1 bg-[#e8f5e0] text-[#163300] text-xs font-bold rounded">
          {reward.discount}
        </span>
      </div>

      <h3 className="font-semibold text-gray-900 mb-1">{reward.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{reward.description}</p>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg">🪙</span>
            <span className={`font-bold ${canAfford ? "text-[#163300]" : "text-gray-400"}`}>
              {reward.coinsRequired.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">coins</span>
          </div>
          <p className="text-xs text-gray-400">Worth {reward.originalValue}</p>
        </div>
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            canAfford
              ? "bg-[#9fe870] text-[#163300] hover:bg-[#8fd960] hover:scale-105"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!canAfford}
        >
          {canAfford ? "Redeem" : `Need ${reward.coinsRequired - userCoins} more`}
        </button>
      </div>
    </div>
  );
}

