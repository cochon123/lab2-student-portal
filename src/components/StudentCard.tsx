// ============================================================
// Component: StudentCard
// Author:    cochon123
// Date:      2026-06-14
// Description:
//   Presentational component that renders a single student as a
//   card. Shows the student's first and last name, date of birth
//   (formatted), and current grade.
//   Inputs:   a Student object via the `student` prop.
//   Processing: derives a formatted DOB string using the
//               Intl.DateTimeFormat API and renders the card.
//   Output:   an <article> element describing one student.
// ============================================================

import type { Student } from "@/types/student";

export default function StudentCard({ student }: { student: Student }) {
  // Format the ISO date string into a readable label.
  const formattedDob = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(student.dateOfBirth));

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">
        {student.firstName} {student.lastName}
      </h3>
      <dl className="mt-2 space-y-1 text-sm text-gray-600">
        <div>
          <dt className="inline font-medium text-gray-700">Date of Birth: </dt>
          <dd className="inline">{formattedDob}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-700">Grade: </dt>
          <dd className="inline">{student.grade}</dd>
        </div>
      </dl>
    </article>
  );
}
