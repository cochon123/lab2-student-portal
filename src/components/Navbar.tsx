// ============================================================
// Component: Navbar
// Author:      Sehaj Sharma
// Date:        2026-06-21
// Description:
//   Static top navigation bar for the New Generation High School
//   student portal. Renders the school name and section links.
//   Inputs:   none (purely presentational).
//   Processing: returns JSX markup with brand + nav links.
//   Output:   a <header> element shown at the top of every page.
// ============================================================

import Link from "next/link";

export default function Navbar() {
  // Clean, professional slate-blue variant navbar configuration.
  return (
    <header className="bg-slate-800 text-white shadow-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-wide hover:text-slate-200">
          New Generation High School
        </Link>
        <ul className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider">
          <li>
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Students
            </Link>
          </li>
          <li>
            <Link href="/#add" className="text-slate-300 hover:text-white transition-colors">
              Add Student
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}