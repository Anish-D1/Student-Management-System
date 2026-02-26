import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudent() {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const handleAdd = (student) => {
    addStudent(student);
    navigate("/");
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Add Student</h2>
      <StudentForm onSubmit={handleAdd} />
    </div>
  );
}

export default AddStudent;