"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

// Pages that should not show the sidebar/header (full-screen flows)
const fullScreenPages = ["/send"];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFullScreen = fullScreenPages.some((page) => pathname.startsWith(page));

  if (isFullScreen) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Top Header */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-end px-6 gap-4">
        <button className="px-4 py-2 bg-[#9fe870] text-[#163300] rounded-full text-sm font-semibold hover:bg-[#8fd960] transition-colors">
          Earn €90
        </button>
        <button className="flex items-center gap-3 hover:bg-gray-50 rounded-full py-1.5 px-2 pr-4 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700 relative">
            JE
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <span className="text-sm font-medium text-gray-900">Joosep Oskar Ehaver</span>
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M9.293 7.293l5.414 5.414a1 1 0 010 1.414l-5.414 5.414 1.414 1.414 5.414-5.414a3 3 0 000-4.242L10.707 5.88l-1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-white">{children}</main>
      </div>
    </>
  );
}

