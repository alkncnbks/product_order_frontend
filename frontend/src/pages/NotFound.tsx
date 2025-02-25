import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>404 - Page is not found</h1>
            <p>Sorry, the page you looking for is not exist.</p>
            <Link to="/">Back to Home Screen</Link>
        </div>
    );
};

export default NotFound;
