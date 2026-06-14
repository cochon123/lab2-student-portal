// ============================================================
// Component: Navbar
// Author:    cochon123
// Date:      2026-06-14
// Description:
//   Static top navigation bar for the New Generation High School
//   student portal. Renders the school name and section links.
//   Inputs:   none (purely presentational).
//   Processing: returns JSX markup with brand + nav links.
//   Output:   a <header> element shown at the top of every page.
// ============================================================

import Link from "next/link";

export default function Navbar() {
  // Brand + section list (static, no props/state needed).
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          New Generation High School
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-200">
              Students
            </Link>
          </li>
          <li>
            <Link href="/#add" className="hover:text-indigo-200">
              Add Student
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
