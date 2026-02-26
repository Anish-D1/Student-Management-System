import { useState } from "react";

function StudentForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [age, setAge] = useState(initialData.age || "");
  const [course, setCourse] = useState(initialData.course || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) {
      alert("All fields required");
      return;
    }
    onSubmit({ name, age, course });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" value={age}
        onChange={(e) => setAge(e.target.value)} />
      <input placeholder="Course" value={course}
        onChange={(e) => setCourse(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;

