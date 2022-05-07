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

export default function ButtonAppBar() {
  const [show, setShow] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const container = React.useRef(null);
  const onClose = () => {
    setOnOpen(false);
  };

  return (
    <div className="nav-body">
      <div className="nav-title">Josemi-Chopper</div>
      <div className="nav-login-register">
        <button className="primary-button" onClick={() => setOnOpen(!onOpen)}>Login</button>
        <button className="primary-button" onClick={() => setOnOpen(!onOpen)}>Register</button>
      </div>
      <Modal onOpen={onOpen} setOnOpen={setOnOpen} onClose={onClose}>
        <Register setOnOpen={setOnOpen} />
      </Modal>
    </div>
  );
}
