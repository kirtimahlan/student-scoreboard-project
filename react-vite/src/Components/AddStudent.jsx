import React, { useState } from "react";

function AddStudent({ students, setStudents }) {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleAdd = () => {
    if (name.trim() === "" || score === "") {
      alert("Enter all fields");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);

    setName("");
    setScore("");
  };

  return (
    <div className="box">

      <div className="box-header">
        <span>Register Student</span>
        <span>NEW ENTRY</span>
      </div>

      <div className="row">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button onClick={handleAdd}>+ ADD</button>
      </div>

    </div>
  );
}

export default AddStudent;