// ============================================================
// Component: Footer
// Author:    cochon123
// Date:      2026-06-14
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
  // School information block (static text).
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm">
        <h2 className="mb-2 text-base font-semibold text-white">
          New Generation High School
        </h2>
        <p>123 Future Scholars Avenue, Calgary, AB T2P 1J9</p>
        <p>Phone: (403) 555-0182 &middot; Email: info@ngshigh.ca</p>
        <p className="mt-2 text-gray-500">
          &copy; {new Date().getFullYear()} New Generation High School. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
