import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./css/Styles.css";
import Welcome from "./pages/Welcome.tsx";

function App() {
    return (
        <Router>
            <div className="d-flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <Navbar />
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" Component={Welcome} />
                            <Route path="/login" Component={Login} />
                            <Route path="/dashboard" Component={Dashboard} />
                            <Route path="/products" Component={Products} />
                            <Route path="/orders" Component={Orders} />
                            <Route path="*" Component={NotFound} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
