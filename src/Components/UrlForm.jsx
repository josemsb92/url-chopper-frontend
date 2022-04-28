import React, { useState } from "react";
import axios from "axios";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
        (res) => setShortUrl(`localhost:3000/urlchopper/${res.data.url.GeneratedUrl}`),
        (res) => console.log(res)
      );
  }

  const shortUrlRender =
      shortUrl === "localhost:3000/urlchopper/undefined"? (
      <div className="display-short-url">
        Your url is not a valid url
      </div>
    ) : shortUrl !== ""? <div className="display-short-url">
    Your url has been chopped: <button className="clipboard-button" onClick={copyToClipboard()}>{shortUrl}<ContentCopyIcon/></button>
  </div>: null

  return (
    <div className="url-form-body">
      <form className="url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={urltext}
          className="url-text-area"
          onChange={handleChange}
        />
        <input type="submit" value="Chopp!" onClick={UrlTransform} />
      </form>
      {shortUrlRender}
      
    </div>
  );
}
export default UrlForm;
