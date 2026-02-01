import { useState } from "react";
import { useCanteen } from "../context/CanteenContext";
import SnackCard from "../components/SnackCard";
import OrderModal from "../components/OrderModal";
import "./Snacks.css"

export default function Snacks() {
  const { snacks } = useCanteen();
  const [selectedSnack, setSelectedSnack] = useState(null);

  return (
    <div className="page">
      <h1>Snackss</h1>
      <div className="grid">

        {snacks.map((snack) => (
          <SnackCard
            key={snack.id}
            snack={snack}
            onOrder={() => setSelectedSnack(snack)}
          />
        ))}
        
      </div>

      {selectedSnack && (
        <OrderModal snack={selectedSnack} close={() => setSelectedSnack(null)} />
      )}
    </div>
  );
}
