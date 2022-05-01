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
    setOnOpen(!onOpen);
  };

  return (
    <div className="navbar-body">
     
        <Modal onOpen={onOpen} setOnOpen={setOnOpen} onClose={onClose}>
          <Register />
           </Modal>
     
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Links-Chopper
            </Typography>
            <Button onClick={() => setOnOpen(!onOpen)} color="inherit">
              <AccountCircleIcon fontSize="large" />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
