//STUDENT VIEW FORM   OR GRID VIEW
import { Link } from "react-router-dom";
import { useCanteen } from "../context/CanteenContext";
import "./Student.css"

export default function Students() {
  const { students, deleteStudent } = useCanteen();

  return (
    <>
    
     <div className="page">
      <h1>Students</h1>
      

      {students.length === 0 && <p>No students added yet</p>}


      <div className="cards">
      {students.map((s) => (
        <div key={s.id} className="card">
          <h3>{s.name}</h3>

          <p>Referral: {s.referral}</p>

          <p>
            Total Spent: ₹
            {s.orders.reduce((sum, o) => sum + o.amount, 0)}
          </p>

          <div className="card-actions">
            <Link to={`/students/${s.id}`}>View</Link>

            <button
              className="delete-btn"
              onClick={() => deleteStudent(s.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>

    </>

 
  );
}
