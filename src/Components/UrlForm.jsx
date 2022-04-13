import React, { useState } from "react";
import axios from "axios";

function UrlForm() {
  const [urltext, setUrlText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setUrlText("");
  }
  function handleChange(event) {
    setUrlText(event.target.value);
  }
  function copyToClipboard(){
    navigator.clipboard.writeText(shortUrl)
  }

  async function UrlTransform(event) {
    const response = await axios
      .post("http://localhost:3003/urlchopper/url/", {
        OriginalUrl: urltext,
      })
      .then(
        (res) => setShortUrl(`urlchopper/${res.data.url.GeneratedUrl}`),
        (res) => console.log(res)
      );
  }

  const shortUrlRender =
    shortUrl !== "" ? (
      <div className="display-short-url">
        Your url has been chopped: <input type="button" value={shortUrl} onClick={copyToClipboard()}/>
      </div>
    ) : null;

  return (
    <>
      <form className="Url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={urltext}
          className="Url-text-area"
          onChange={handleChange}
        />
        <input type="submit" value="Chopp!" onClick={UrlTransform} />
      </form>
      {shortUrlRender}
    </>
  );
}
export default UrlForm;
