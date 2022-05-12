import React, { useState } from "react";
import axios from "axios";
import RenderShortUrl from "./RenderShortUrl";
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
      <RenderShortUrl shortUrl={shortUrl} />
    </div>
  );
}
export default UrlForm;
