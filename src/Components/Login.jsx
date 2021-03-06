import React, { useState, useContext, useEffect } from "react";
import loginService from "../services/login";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
export function Login({ setOnOpen }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(userContext);
  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const user = await loginService.login({ email, password });
    window.sessionStorage.setItem("loggedUrlShorterUser", JSON.stringify(user));
    setOnOpen(false);
    setPassword("");
    setEmail("");
    setUser(JSON.parse(window.sessionStorage.getItem("loggedUrlShorterUser")));
    navigate(`/user/${user.email}`);
  }

  return (
    <div>
      <form className="register-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
