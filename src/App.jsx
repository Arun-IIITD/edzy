import { Routes, Route, NavLink } from "react-router-dom";
import Snacks from "./pages/Snacks";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import CreateStudent from "./pages/CreateStudent";
import "./App.css"

export default function App() {
  return (
    <>
      <nav className="nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Snacks
        </NavLink>

        <NavLink 
          to="/students" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Students
        </NavLink>

        <NavLink 
          to="/create-student" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Add Student
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Snacks />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/create-student" element={<CreateStudent />} />
      </Routes>
    </>
  );
}
