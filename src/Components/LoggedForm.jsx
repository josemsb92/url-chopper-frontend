import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect, useState } from "react";

export default function LoggedForm({ shortUrl }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem(
      "loggedUrlShorterUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const render =
    shortUrl === "localhost:3000/undefined" ? (
      <div className="display-short-url">Your url is not a valid url</div>
    ) : shortUrl !== "" ? (
      <div className="display-short-url">
        <button
          className="clipboard-button"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
        >
          {shortUrl}
          <ContentCopyIcon />
        </button>
      </div>
    ) : null;
  return render;
}
