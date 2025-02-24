import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>404 - Sayfa Bulunamadı</h1>
            <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
            <Link to="/">Ana Sayfaya Dön</Link>
        </div>
    );
};

export default NotFound;
