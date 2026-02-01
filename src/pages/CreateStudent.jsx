// STUDENT REGISTER FORM
import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";
import "./CreateStudent.css"

export default function CreateStudent() {
  const { addStudent } = useCanteen();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addStudent(data);
    reset();
  };

  return (
    <div className="page">

      <h1>Create Student</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <input
          type="number"
          placeholder="Age"
          {...register("age", { required: true })}
        />

        <input
          placeholder="Class"
          {...register("studentClass", { required: true })}
        />

        <button type="submit">Add</button>
        
      </form>


     

    </div>
  );
}
