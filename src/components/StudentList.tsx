// ============================================================
// Component: StudentList
// Author:    cochon123
// Date:      2026-06-14
// Description:
//   Presentational component that renders a list of students as
//   a responsive grid of StudentCard components. Empty state is
//   handled with a short message.
//   Inputs:   an array of Student objects via the `students`
//             prop.
//   Processing: maps the array to StudentCard elements keyed by
//               student id.
//   Output:   a <section> element containing the student grid.
// ============================================================

import StudentCard from "./StudentCard";
import type { Student } from "@/types/student";

export default function StudentList({ students }: { students: Student[] }) {
  // Empty-state guard.
  if (students.length === 0) {
    return (
      <p className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-800">
        No students yet. Use the form below to add the first one.
      </p>
    );
  }

  return (
    <section
      aria-label="Student list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}
