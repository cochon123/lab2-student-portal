// ============================================================
// Component: Footer
// Author:      Sehaj Sharma
// Date:        2026-06-21
// Description:
//   Static footer for the New Generation High School student
//   portal. Displays the school's name, address, phone, and
//   email so administrators can always see contact details.
//   Inputs:   none (purely presentational).
//   Processing: returns JSX markup with school info.
//   Output:   a <footer> element shown at the bottom of every
//             page.
// ============================================================

export default function Footer() {
  // Simple light-gray utility footer theme.
  return (
    <footer className="mt-auto bg-slate-100 text-slate-600 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-6 text-xs md:text-sm">
        <h2 className="mb-1 text-sm font-bold text-slate-800">
          New Generation High School
        </h2>
        <p>123 Future Scholars Avenue, Calgary, AB T2P 1J9</p>
        <p className="mt-0.5">Phone: (403) 555-0182 &middot; Email: info@ngshigh.ca</p>
        <p className="mt-3 text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} New Generation High School. All administrative rights reserved.
        </p>
      </div>
    </footer>
  );
}