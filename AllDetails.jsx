import React from "react";

function AllDetails({ students, updateScore }) {

  const [input, setInputs] = React.useState(students.map(s => s.score));

  React.useEffect(() => {
    setInputs(students.map(s => s.score));
  }, [students]);

  const handleChange = (index, value) => {
    const newInputs = [...input];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="table-box">

      <div className="table-header">
        <span>STUDENT RECORDS</span>
        <span>{students.length} Entries</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, index) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>

              <td>
                {item.score >= 40 ? "Pass" : "Fail"}
              </td>

              <td>
                <input
                  type="number"
                  value={input[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                <button onClick={() => updateScore(item.id, input[index])}>
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default AllDetails;