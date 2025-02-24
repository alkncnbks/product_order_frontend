import { Link } from "react-router-dom";
import "../css/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar bg-dark text-white p-3">
            <h2 className="text-center">Admin Panel</h2>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">🏠 Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link text-white">📦 Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link text-white">🛒 Orders</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
