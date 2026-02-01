//STUDENT DETAIL FORM    OR  CARD
import { useParams } from "react-router-dom";
import { useCanteen } from "../context/CanteenContext";
import "./StudentDetail.css"

export default function StudentDetail() {
  const { id } = useParams();
  const { students } = useCanteen();

  const student = students.find((s) => s.id === Number(id));
  console.log(student)

  if (!student) return <p>Not found</p>;

  return (
    <div className="page">

      <h2>Student Detail</h2>
      <h3>Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>Class: {student.studentClass}</h3>


      <h2>Orders</h2>
      {student.orders.length === 0 && <h3>No orders yet</h3>}

      {student.orders.map((o, i) => (
        <p key={i}>
          {o.snack} × {o.qty} = ₹{o.amount}
        </p>
      ))}
    </div>
  );
}

