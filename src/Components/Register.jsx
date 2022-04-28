import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastname] = useState("");
  const [telf, setTelf] = useState("");


  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view

  
    //------------------------------------------------------
  ;

    // Maybe an ineficient way to handle login

    setUsername("");
    setPassword("");
  };


  return (
    <>
      <p className="modal-register-title">Registrate</p>
      <form className="register-form session-form" onSubmit={userRegister}>
        <input
          className="register-data"
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Nombre"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Apellido"
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Telefono"
          type="number"
          value={telf}
          onChange={(e) => setTelf(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button register-button"
          onClick={(e) => userRegister(e)}
        >
          Registrarme
        </button>
      </form>
    </>
  );
};
