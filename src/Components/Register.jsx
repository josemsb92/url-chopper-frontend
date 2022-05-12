import React, { useState } from "react";
import axios from "axios";
export default function Register({ setOnOpen }) {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function sendPost(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3003/urlchopper/user", {
      name: name,
      surname: surname,
      password: password,
      email: email,
    });
    setOnOpen(false);
  }

  return (
    <div>
      <form className="register-form" onSubmit={sendPost}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurName(e.target.value)}
        />
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
        <button>Register</button>
      </form>
    </div>
  );
}
