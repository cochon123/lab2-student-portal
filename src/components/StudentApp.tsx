// ============================================================
// Component: StudentApp
// Author:    cochon123
// Date:      2026-06-14
// Description:
//   Client container component for the interactive student
//   portal. Holds the student list in React state seeded by the
//   server, renders the StudentList, and wires the AddStudentForm
//   so new students appear immediately in the list.
//   Inputs:   `initialStudents` — array of Student objects passed
//             from the server component (page.tsx).
//   Processing: keeps the list in useState; onAdd prepends a new
//               student with an auto-incremented id.
//   Output:   a <section> element containing the list and form.
// ============================================================

"use client";

import { useState } from "react";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";
import type { Student } from "@/types/student";

type NewStudent = Omit<Student, "id">;

export default function StudentApp({
  initialStudents,
}: {
  initialStudents: Student[];
}) {
  // Client state seeded from server-fetched JSON.
  const [students, setStudents] = useState<Student[]>(initialStudents);

  // Add handler — assigns the next id and prepends the new student.
  function handleAdd(newStudent: NewStudent) {
    setStudents((prev) => {
      const nextId = prev.reduce((max, s) => Math.max(max, s.id), 0) + 1;
      return [{ ...newStudent, id: nextId }, ...prev];
    });
  }

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Student Directory</h1>
        <p className="mt-1 text-sm text-gray-600">
          Current enrollment: {students.length}{" "}
          {students.length === 1 ? "student" : "students"}.
        </p>
      </div>

      {/* Render the presentational list and the interactive form. */}
      <StudentList students={students} />
      <AddStudentForm onAdd={handleAdd} />
    </section>
  );
}
