// ============================================================
// Page: Home (Student Portal)
// Author: cochon123
// Date:   2026-06-14
// Description:
//   Server component for the root route. Loads the JSON seed data
//   for students and composes the Navbar, the interactive
//   StudentApp, and the Footer.
//   Inputs:   the students JSON file imported as a module.
//   Processing: reads the JSON synchronously on the server and
//               passes it as the initialStudents prop.
//   Output:   the home page of the student portal.
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentApp from "@/components/StudentApp";
import type { Student } from "@/types/student";
import studentsData from "@/data/students.json";

export default function Home() {
  // JSON import is statically available on the server.
  const initialStudents = studentsData as Student[];

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <StudentApp initialStudents={initialStudents} />
      </main>
      <Footer />
    </>
  );
}
