import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { isValidPhone } from "../utils/validators";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setError("Phone number must start with +254 and have 9 more digits.");
      return;
    }
    if (phone !== "+254712345678") {
      setError("Invalid phone number. Try +254712345678");
      return;
    }
    login(phone);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="+254712345678"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setError(""); }}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
