import './App.css';
import React, { useState } from 'react';
import Heading from './components/Heading';
import AddStudent from'./components/AddStudent';
import StudentsSummary from './components/StudentsSummary';
import AllDetails from './components/AllDetails';

function App() {

  const initialStudents = [
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Rahul", score: 85 },
    { id: 3, name: "Priya", score: 32 },
    { id: 4, name: "Sneha", score: 67 }
  ];

  const [students, setStudents] = useState(initialStudents);

  const update = (id, newScore) => {
    const updatedStudents = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updatedStudents);
  };

  return (
    <div className='app-container'>

      <Heading />

      <AddStudent students={students} setStudents={setStudents} />

      {/* IMPORTANT */}
      <StudentsSummary students={students} />

      <AllDetails students={students} updateScore={update} />

    </div>
  );
}

export default App;