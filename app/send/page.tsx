"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { name: "Recipient", completed: true },
  { name: "Amount", active: true },
  { name: "Review", completed: false },
  { name: "Pay", completed: false },
];

export default function SendPaymentPage() {
  const [amount, setAmount] = useState("10");
  const [reference, setReference] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src="/logo.svg" alt="Wise" width={90} height={22} />

          {/* Progress Steps */}
          <div className="flex items-center gap-0">
            {steps.map((step, index) => (
              <div key={step.name} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-1 w-24 rounded-full mb-2 ${
                      step.completed
                        ? "bg-[#163300]"
                        : step.active
                        ? "bg-[#9fe870]"
                        : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      step.active || step.completed
                        ? "text-gray-900 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <Link
              href="/"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-12">
        {/* You send exactly */}
        <section className="mb-2">
          <p className="text-gray-600 text-sm mb-3">You send exactly</p>
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <span className="text-lg">🇪🇺</span>
              <span className="font-medium">EUR</span>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
              className="text-7xl font-bold text-right bg-transparent outline-none w-48 border-r-4 border-[#9fe870]"
              placeholder="0"
            />
          </div>
        </section>

        {/* SEB gets */}
        <section className="py-6 border-b border-gray-200">
          <p className="text-gray-600 text-sm mb-3">SEB gets</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
              <div className="flex -space-x-1">
                <span className="text-sm">🔵</span>
                <span className="text-lg">🇪🇺</span>
              </div>
              <span className="font-medium">EUR</span>
            </div>
            <span className="text-5xl font-bold">
              {parseFloat(amount || "0").toFixed(2)}
            </span>
          </div>
        </section>

        {/* Payment Details */}
        <section className="py-4 space-y-4">
          {/* Paying with */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#9fe870] rounded-full flex items-center justify-center relative">
                <svg width="20" height="20" fill="#163300" viewBox="0 0 24 24">
                  <path d="M8 4h3.586l-8.293 8.293 1.414 1.414L13 5.414V9h2V3.01A1.01 1.01 0 0 0 13.99 2H8v2zm3 14.586 8.293-8.293 1.414 1.414L12.414 20H16v2h-5.99A1.01 1.01 0 0 1 9 20.99V15h2v3.586z" />
                </svg>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-[8px] text-white">●</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Paying with</p>
                <p className="font-semibold">Main account / EUR</p>
                <p className="text-gray-500 text-sm">9,235.35 EUR available</p>
              </div>
            </div>
            <button className="px-4 py-2 text-[#163300] border border-[#9fe870] rounded-full text-sm font-medium hover:bg-[#e8f5e0] transition-colors">
              Change
            </button>
          </div>

          {/* Arrives */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Arrives</p>
                <p className="font-semibold">Today - in seconds</p>
              </div>
            </div>
            <button className="px-4 py-2 text-[#163300] border border-[#9fe870] rounded-full text-sm font-medium hover:bg-[#e8f5e0] transition-colors">
              Schedule
            </button>
          </div>

          {/* Total fees */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12h6M9 16h6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total fees</p>
                <p className="font-semibold">Free - no fees to pay</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="py-4">
          <label className="block text-gray-600 text-sm mb-2">
            Reference for recipient (optional)
          </label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#9fe870] focus:ring-2 focus:ring-[#9fe870]/20 transition-all"
            placeholder=""
          />
        </section>

        {/* Continue Button */}
        <button className="w-full py-4 bg-[#9fe870] text-[#163300] rounded-full text-lg font-semibold hover:bg-[#8fd960] transition-colors mt-4">
          Continue
        </button>
      </main>
    </div>
  );
}

