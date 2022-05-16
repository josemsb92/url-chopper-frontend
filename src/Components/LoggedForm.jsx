import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect, useState } from "react";

export default function LoggedForm({ urls }) {
  const [user, setUser] = useState("");
  const [render, setRender] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem(
      "loggedUrlShorterUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  // if (urls.length > 0) {
  //   urls.map((url) => {
  //     <div className="display-short-url">
  //       <button
  //         className="clipboard-button"
  //         onClick={() =>
  //           navigator.clipboard.writeText(`localhost:3000/${url.GeneratedUrl}`)
  //         }
  //       >
  //         {url.GeneratedUrl}
  //         <ContentCopyIcon />
  //       </button>
  //     </div>;
  //   });

  // }

  return (
    <>
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
              <div className="aaa">
                <ContentCopyIcon />
              </div>
            </button>
          </div>
        ))}
    </>
  );
}
