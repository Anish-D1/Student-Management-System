import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const updateStudent = (updated) => {
    setStudents(
      students.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent, updateStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};