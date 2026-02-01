import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";

export default function OrderModal({ snack, close }) {
  const { students, placeOrder } = useCanteen();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    placeOrder(Number(data.studentId), snack, Number(data.qty));
    close();
  };

  return (
    <div className="modal">


      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Order {snack.name}</h3>

        <select {...register("studentId", { required: true })}>

          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter quantity of snacks"
          min="1"
          max="5"
          {...register("qty", { required: true })}
        />

        <button type="submit">Place Order</button>
        <button onClick={close}>Cancel</button>
      </form>



    </div>
  );
}
