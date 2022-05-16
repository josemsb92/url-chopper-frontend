import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect, useState } from "react";
import deleteUrlService from "../services/deleteUrl";
import Alert from "@mui/material/Alert";
import axios from "axios";
export default function LoggedForm({ urls }) {
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem(
      "loggedUrlShorterUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  async function handleDelete(url) {
    if (window.confirm("Are you sure you want to delete this url?")) {
      deleteUrlService.deleteUrl(url.id);
    }
  }
  return (
    <>
      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
        >
          Welcome {user.email}
        </Alert>
      )}

      {urls.length > 0 &&
        urls.map((url) => (
          <div key={url.id} className="display-short-url">
            <p>Your short url for {url.OriginalUrl}: </p>
            <button
              className="clipboard-button"
              onClick={() =>
                navigator.clipboard.writeText(
                  `localhost:3000/${url.GeneratedUrl}`
                )
              }
            >
              {`localhost:3000/${url.GeneratedUrl}`}
              <ContentCopyIcon />
            </button>
            <div className="short-url-delete">
              <button onClick={() => handleDelete(url)}>Delete</button>
            </div>
          </div>
        ))}
    </>
  );
}
