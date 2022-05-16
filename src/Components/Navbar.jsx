import * as React from "react";
import Modal from "./Modal";
import { useState, useContext, useEffect } from "react";
import Register from "./Register";
import { Login } from "./Login";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
  const [show, setShow] = useState(false);
  const [onOpenLogin, setOnOpenLogin] = useState(false);
  const [onOpenRegister, setOnOpenRegister] = useState(false);
  const [renderLogin, setRenderLogin] = useState("");
  const { user, setUser } = useContext(userContext);
  const container = React.useRef(null);
  let navigate = useNavigate();
  const onCloseLogin = () => {
    setOnOpenLogin(false);
  };
  const onCloseRegister = () => {
    setOnOpenRegister(false);
  };
  const handleLogout = () => {
    if (window.confirm("Do you want to Log Out?")) {
      sessionStorage.removeItem("loggedUrlShorterUser");
      navigate("/");
    }
  };
  useEffect(() => {
    if (window.location.pathname.startsWith("/user")) {
      setRenderLogin(
        <button className="primary-button" onClick={handleLogout}>
          Log Out
        </button>
      );
    } else {
      setRenderLogin(
        <button
          className="primary-button"
          onClick={() => setOnOpenLogin(!onOpenLogin)}
        >
          Login
        </button>
      );
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="nav-body">
        <div className="nav-title">Josemi-Chopper</div>
        <div className="nav-login-register">
          {renderLogin}
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
