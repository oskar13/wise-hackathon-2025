"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="m19 10.415-7-5.172-7 5.172V19h14v-8.585M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.585a2 2 0 0 1 .812-1.608L11.4 3.2a1.01 1.01 0 0 1 1.2 0l7.589 5.607A2 2 0 0 1 21 10.415z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Cards",
    href: "/cards",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.438c0 .38-.21.71-.518.883-.656.366-.982 1-.982 1.679s.326 1.313.982 1.68c.274.152.518.466.518.881V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18 12v-.908A3.88 3.88 0 0 1 18.5 14c0-1.165.501-2.318 1.5-3.091V6H4v12zM6 8h3v2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M6 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m2 1h13V5H8zm0 6h13v-2H8zm13 6H8v-2h13zM6 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Payments",
    href: "/payments",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M8 4h3.586l-8.293 8.293 1.414 1.414L13 5.414V9h2V3.01A1.01 1.01 0 0 0 13.99 2H8zm3 14.586 8.293-8.293 1.414 1.414L12.414 20H16v2h-5.99A1.01 1.01 0 0 1 9 20.99V15h2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    submenu: [
      { name: "Scheduled", href: "/payments/scheduled", icon: <CalendarIcon /> },
      { name: "Direct Debits", href: "/payments/direct-debits", icon: <DirectDebitIcon /> },
      { name: "Recurring card payments", href: "/payments/recurring", icon: <RecurringIcon /> },
      { name: "Payment requests", href: "/payments/requests", icon: <RequestIcon /> },
      { name: "Bill splits", href: "/payments/bill-splits", icon: <BillSplitIcon /> },
    ],
  },
  {
    name: "Recipients",
    href: "/recipients",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.136 7.105A3.001 3.001 0 0 1 18 8a3 3 0 0 1-4.003 2.829 4.99 4.99 0 0 0-1.861-3.724m5.983 4.803a5 5 0 1 0-7.778-5.726A5.005 5.005 0 0 0 4 11a4.99 4.99 0 0 0 1.88 3.908C4.144 16.013 3 18.01 3 20.25V21h2v-.75C5 17.856 6.836 16 9 16s4 1.856 4 4.25V21h2v-.75c0-2.24-1.143-4.237-2.88-5.342a5 5 0 0 0 1.297-1.562A3.8 3.8 0 0 1 15 13c2.164 0 4 1.856 4 4.25V18h2v-.75c0-2.24-1.143-4.237-2.88-5.342M12 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Insights",
    href: "/insights",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M16 3v16h-3V8h-2v11H8v-7H6v7H3v2h18v-2h-3V3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Charity",
    href: "/charity",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function CalendarIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M6 3h2v2h8V3h2v2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2zm10 4v1h2V7h2v12H4V7h2v1h2V7zm2 8h-2v2h2z" clipRule="evenodd" />
    </svg>
  );
}

function DirectDebitIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M17.556 3.685A10 10 0 0 0 2 12h2a8 8 0 0 1 14.928-4H15v2h5.99A1.01 1.01 0 0 0 22 8.99V3h-2v3a10 10 0 0 0-2.444-2.315M2 21v-5.99c0-.558.452-1.01 1.01-1.01H9v2H5.072A8 8 0 0 0 20 12h2a10 10 0 0 1-18 6v3z" clipRule="evenodd" />
    </svg>
  );
}

function RecurringIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M19.99 9H14V7h4.245a8 8 0 1 0-.588 10.657l1.414 1.414A10 10 0 1 1 19 4.86V2h2v5.99A1.01 1.01 0 0 1 19.99 9" clipRule="evenodd" />
    </svg>
  );
}

function RequestIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7h-2V8a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v6a2 2 0 0 1 2 2h7v2H4a2 2 0 0 1-2-2zm8 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m6 8v3.586l-1.293-1.293-1.414 1.414 2.993 2.993a1.01 1.01 0 0 0 1.428 0l2.993-2.993-1.414-1.414L20 18.586V15z" clipRule="evenodd" />
    </svg>
  );
}

function BillSplitIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M10 5H6.414L12 10.586 17.586 5H14V3h5.99c.558 0 1.01.452 1.01 1.01v5.991h-2V6.414l-6 6V21h-2v-8.586l-6-6v3.587H3V4.01C3 3.452 3.452 3 4.01 3H10z" clipRule="evenodd" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [paymentsOpen, setPaymentsOpen] = useState(true);

  return (
    <nav className="w-72 min-h-screen bg-white border-r border-gray-100">
      {/* Logo */}
      <div className="p-6 pb-4">
        <img
          src="/logo.svg"
          alt="Wise Logo"
          width={106}
          height={24}
        />
      </div>

      <ul className="px-3 space-y-0.5">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <li key={item.name}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className={`
                    flex-1 flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-all duration-150
                    ${
                      isActive
                        ? "bg-[#e8f5e0] text-[#163300]"
                        : "text-gray-700 hover:bg-[#f2f5f2]"
                    }
                  `}
                >
                  <span className={isActive ? "text-[#163300]" : "text-gray-500"}>
                    {item.icon}
                  </span>
                  <span className="font-medium text-[15px]">{item.name}</span>
                </Link>
                {hasSubmenu && (
                  <button
                    onClick={() => setPaymentsOpen(!paymentsOpen)}
                    className="p-2 hover:bg-[#f2f5f2] rounded-lg transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className={`transition-transform duration-200 ${paymentsOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="m12 14.586 7.293-7.293 1.414 1.414-7.993 7.993a1.01 1.01 0 0 1-1.428 0L3.293 8.707l1.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Submenu */}
              {hasSubmenu && paymentsOpen && (
                <ul className="ml-4 mt-1 space-y-0.5">
                  {item.submenu!.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg
                            transition-all duration-150 text-[14px]
                            ${
                              isSubActive
                                ? "bg-[#e8f5e0] text-[#163300]"
                                : "text-gray-600 hover:bg-[#f2f5f2]"
                            }
                          `}
                        >
                          <span className="text-gray-400">{subItem.icon}</span>
                          <span>{subItem.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
