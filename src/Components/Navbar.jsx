import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "./Modal";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
export default function ButtonAppBar() {
  const [show, setShow] = useState(false);
  const [onOpenLogin, setOnOpenLogin] = useState(false);
  const [onOpenRegister, setOnOpenRegister] = useState(false);
  const container = React.useRef(null);
  const onCloseLogin = () => {
    setOnOpenLogin(false);
  };
  const onCloseRegister = () => {
    setOnOpenRegister(false);
  };

  return (
    <>
      <div className="nav-body">
        <div className="nav-title">Josemi-Chopper</div>
        <div className="nav-login-register">
          <button
            className="primary-button"
            onClick={() => setOnOpenLogin(!onOpenLogin)}
          >
            Login
          </button>
          <button
            className="primary-button"
            onClick={() => setOnOpenRegister(!onOpenRegister)}
          >
            Register
          </button>
        </div>
      </div>

      <Modal onOpen={onOpenRegister} onClose={onCloseRegister}>
        <Register setOnOpen={setOnOpenRegister} />
      </Modal>
      <Modal onOpen={onOpenLogin} onClose={onCloseLogin}>
        <Login setOnOpen={setOnOpenLogin} />
      </Modal>
    </>
  );
}
