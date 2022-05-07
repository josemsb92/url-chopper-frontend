import React, { useState } from "react";
import axios from "axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function UrlForm() {
  const [urltext, setUrlText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    UrlTransform();
    setUrlText("");
  }
  function handleChange(event) {
    setUrlText(event.target.value);
  }

  async function UrlTransform() {
    const response = await axios
      .post("http://localhost:3003/urlchopper/url/", {
        OriginalUrl: urltext,
      })
      .then((res) =>
        setShortUrl(`localhost:3000/${res.data.url.GeneratedUrl}`)
      );
  }

  const shortUrlRender =
    shortUrl === "localhost:3000/undefined" ? (
      <div className="display-short-url">Your url is not a valid url</div>
    ) : shortUrl !== "" ? (
      <div className="display-short-url">
        Your short url:{" "}
        <button
          className="clipboard-button"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
        >
          {shortUrl}
          <ContentCopyIcon />
        </button>
      </div>
    ) : null;

  return (
    <div className="url-form-body">
      <p className="url-input-description">
        Insert your url into the textarea to make it shorter.
      </p>
      <form className="url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={urltext}
          size="60"
          className="url-text-area"
          onChange={handleChange}
        />
        <button> Chopp! </button>
        <p className="terms">
          By clicking Chopp!, you are agreeing to Josemi-Chopper’s Terms of
          Service, Privacy Policy, and Acceptable Use Policy
        </p>
      </form>

      {shortUrlRender}
    </div>
  );
}
export default UrlForm;
