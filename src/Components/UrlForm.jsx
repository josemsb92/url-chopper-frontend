import React, { useEffect, useState } from "react";
import axios from "axios";
import getUrlService from "../services/getUrlsById";
import UnloggedForm from "./UnloggedForm";
import LoggedForm from "./LoggedForm";
function UrlForm() {
  const [urltext, setUrlText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrl] = useState("");
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

  useEffect(() => {
    async function handleUrls() {
      const urls = await getUrlService.getUrlsById(user.id);
      setUrl(urls);
    }
    handleUrls();
    console.log(urls);
  }, [shortUrl]);

  function handleSubmit(event) {
    event.preventDefault();
    UrlTransform();
    setUrlText("");
  }
  function handleChange(event) {
    setUrlText(event.target.value);
  }

  async function UrlTransform() {
    if (user !== "") {
      const response = await axios
        .post("http://localhost:3003/urlchopper/url/", {
          OriginalUrl: urltext,
          UserId: user.id,
        })
        .then((res) =>
          setShortUrl(`localhost:3000/${res.data.url.GeneratedUrl}`)
        );
    } else {
      const response = await axios
        .post("http://localhost:3003/urlchopper/url/", {
          OriginalUrl: urltext,
        })
        .then((res) =>
          setShortUrl(`localhost:3000/${res.data.url.GeneratedUrl}`)
        );
    }
  }

  const renderUrls = window.sessionStorage.getItem("loggedUrlShorterUser") ? (
    <LoggedForm shortUrl={shortUrl} />
  ) : (
    <UnloggedForm shortUrl={shortUrl} />
  );

  return (
    <>
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
      </div>
      <div className="shorturl">{renderUrls}</div>
    </>
  );
}
export default UrlForm;
