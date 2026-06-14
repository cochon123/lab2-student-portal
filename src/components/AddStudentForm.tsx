// ============================================================
// Component: AddStudentForm
// Author:    cochon123
// Date:      2026-06-14
// Description:
//   Client component containing the form used to add a new
//   student. Validates first name, last name, date of birth, and
//   grade before notifying the parent.
//   Inputs:   an onAdd callback prop of type (student) => void.
//   Processing: tracks form fields with useState, enforces data
//               validation using native HTML5 constraints
//               (required, pattern, min/max) plus a JS guard in
//               the submit handler for name length, valid DOB,
//               not-future DOB, and grade range 9-12.
//   Output:   a <form> element. On valid submit, calls onAdd
//             with a new Student object (id assigned by parent).
// ============================================================

"use client";

import { useState, type FormEvent } from "react";
import type { Student } from "@/types/student";

// Constraint constants reused by attributes and the JS guard.
const NAME_PATTERN = /^[A-Za-z][A-Za-z'-]{1,49}$/;
const GRADES = [9, 10, 11, 12] as const;

type NewStudent = Omit<Student, "id">;

export default function AddStudentForm({
  onAdd,
}: {
  onAdd: (student: NewStudent) => void;
}) {
  // Form field state.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [grade, setGrade] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Today's ISO date, used as the max for the DOB picker so future
  // dates cannot be selected.
  const todayISO = new Date().toISOString().split("T")[0];

  function resetForm() {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGrade("");
    setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    // JS-side guard that mirrors the native constraints, so invalid
    // data can never reach the parent even if the browser bypasses
    // the UI checks.
    if (!NAME_PATTERN.test(firstName.trim())) {
      setError("First name must be 2-50 letters (apostrophe/hyphen allowed).");
      return;
    }
    if (!NAME_PATTERN.test(lastName.trim())) {
      setError("Last name must be 2-50 letters (apostrophe/hyphen allowed).");
      return;
    }
    const dob = new Date(dateOfBirth);
    if (Number.isNaN(dob.getTime())) {
      setError("Please enter a valid date of birth.");
      return;
    }
    if (dob > new Date()) {
      setError("Date of birth cannot be in the future.");
      return;
    }
    const gradeNum = Number(grade);
    if (!GRADES.includes(gradeNum as (typeof GRADES)[number])) {
      setError("Grade must be one of 9, 10, 11, or 12.");
      return;
    }

    // All validations passed — hand the new student to the parent.
    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dateOfBirth,
      grade: gradeNum,
    });
    resetForm();
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-6 space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      id="add"
    >
      <h2 className="text-lg font-semibold text-gray-900">Add a New Student</h2>

      {/* Error banner — only rendered when validation fails. */}
      {error && (
        <p
          role="alert"
          className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* First name — required, letters only, 2-50 chars. */}
        <label className="block text-sm">
          <span className="font-medium text-gray-700">First name</span>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z][A-Za-z'-]{1,49}"
            title="2-50 letters, apostrophe or hyphen allowed."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </label>

        {/* Last name — same constraints as first name. */}
        <label className="block text-sm">
          <span className="font-medium text-gray-700">Last name</span>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z][A-Za-z'-]{1,49}"
            title="2-50 letters, apostrophe or hyphen allowed."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </label>

        {/* Date of birth — required, not in the future. */}
        <label className="block text-sm">
          <span className="font-medium text-gray-700">Date of birth</span>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
            max={todayISO}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </label>

        {/* Grade — restricted to 9-12 via select. */}
        <label className="block text-sm">
          <span className="font-medium text-gray-700">Current grade</span>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select a grade
            </option>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                Grade {g}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Submit + reset controls. */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Add student
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
