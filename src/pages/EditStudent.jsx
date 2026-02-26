import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function EditStudent() {
  const { id } = useParams();
  const { students, updateStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const student = students.find((s) => s.id === Number(id));

  const handleUpdate = (data) => {
    updateStudent({ ...data, id: Number(id) });
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <StudentForm onSubmit={handleUpdate} initialData={student} />
    </div>
  );
}

export default EditStudent;