export const snacks = [
  { id: 1, name: "Samosa", price: 20, ordersCount: 0 },
  { id: 2, name: "Sandwich", price: 40, ordersCount: 0 },
  { id: 3, name: "Juice", price: 30, ordersCount: 0 },
  { id: 4, name: "Apple", price: 100, ordersCount: 0 },
   { id: 5, name: "Mango", price: 40, ordersCount: 0 },
    { id: 6, name: "Egg", price: 60, ordersCount: 0 },
  

];

export const generateReferral = () =>
  Math.random().toString(36).substring(2, 8).toUpperCase();
