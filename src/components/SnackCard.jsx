export default function SnackCard({ snack, onOrder }) {
  return (
    <div className="card">
      <h3>{snack.name}</h3>
      <p>₹{snack.price}</p>
      <p>Orders: {snack.ordersCount}</p>
      <button onClick={onOrder}>Order</button>
    </div>
  );
}
