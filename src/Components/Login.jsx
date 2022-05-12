import React, { useState } from "react";
import loginService from "../services/login";

export default function Login({ setOnOpen }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const user = await loginService
      .login({ email, password })
      .then((res) => console.log(res));
    setOnOpen(false);
    setPassword("");
    setEmail("");
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
