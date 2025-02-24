import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            localStorage.setItem("token", "123456"); // Token kaydet
            navigate("/dashboard"); // Dashboard'a yönlendir
        } else {
            alert("Hatalı kullanıcı adı veya şifre!");
        }
    };

    return (
        <div>
            <h1>Giriş Yap</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Kullanıcı Adı:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Şifre:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
};

export default Login;
