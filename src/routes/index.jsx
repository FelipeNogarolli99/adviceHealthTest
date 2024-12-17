import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "../pages/New/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import Scheduling from "../pages/Scheduling/index.jsx"
import Profle from "../pages/Profile/index.jsx"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Scheduling />} />
                <Route path="/consultas" element={<Scheduling />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new" element={<New />} />
                <Route path="/perfil" element={<Profle />} />
            </Routes>
        </BrowserRouter>
    );
}