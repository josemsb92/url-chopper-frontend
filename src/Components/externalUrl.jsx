import { useState, useEffect } from "react";
import axios from "axios";

function ExternalUrl() {
  const [urlRedirect, setUrlRedirect] = useState("");

  useEffect(() => {
    const shortUrl = window.location.pathname.split("/");

    const OriginalUrl = async () => {
      await axios
        .get(`http://localhost:3003/urlchopper/url/${shortUrl[1]}`)
        .then((response) => {
          const data = [...response.data];
          setUrlRedirect(data[0].OriginalUrl);
        });
    };
    OriginalUrl();
  }, []);

  if (!urlRedirect.startsWith("http") && urlRedirect !== "") {
    window.location.replace(`//${urlRedirect}`);
    console.log(urlRedirect, "renderIF");
  } else if (urlRedirect !== "") {
    window.location.replace(urlRedirect);
  }
}
export default ExternalUrl;
