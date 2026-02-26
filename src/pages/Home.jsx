import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";


function Home() {
  const { students, deleteStudent } = useContext(StudentContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Filter students by name OR course
  const filtered = students.filter((s) => {
    const query = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.course.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Student List</h2>
      <br />

      {/* Single search input */}
      <input
        className="search"
        placeholder="Search by name or course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", width: "300px" }}
      />
      <br />
      <br />

      {filtered.map((student) => (
        <div className="card" key={student.id} style={{ marginBottom: "15px" }}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>

          <button
            className="btn-primary"
            onClick={() => navigate(`/edit/${student.id}`)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>

          <button className="btn-danger" onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </div>
      ))}

   
    </div>
  );
}

export default Home;