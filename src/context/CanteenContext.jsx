import { createContext, useContext, useState } from "react";
import { snacks as initialSnacks, generateReferral } from "../api/mockApi";

const CanteenContext = createContext();

export const CanteenProvider = ({ children }) => {
  const [snacks, setSnacks] = useState(initialSnacks);
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  const addStudent = ({name,age, studentClass}) => {

    const student = {
      id: Date.now(),
      name,
      age,
      studentClass,
      referral: generateReferral(),
      orders: [],
    };

    const updated = [...students, student];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const deleteStudent = (id) => {
  const updated = students.filter((s) => s.id !== id);
  setStudents(updated);
  localStorage.setItem("students", JSON.stringify(updated));
};


  const placeOrder = (studentId, snack, qty) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              orders: [
                ...s.orders,
                {
                  snack: snack.name,
                  qty,
                  amount: snack.price * qty,
                },
              ],
            }
          : s
      )
    );

    setSnacks((prev) =>
      prev.map((sn) =>
        sn.id === snack.id
          ? { ...sn, ordersCount: sn.ordersCount + 1 }
          : sn
      )
    );
  };

  return (
    <CanteenContext.Provider
      value={{ snacks, students, addStudent, placeOrder, deleteStudent }}
    >
      {children}
    </CanteenContext.Provider>
  );
};

export const useCanteen = () => useContext(CanteenContext);
