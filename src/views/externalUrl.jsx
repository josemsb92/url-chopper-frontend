import {useState, useEffect} from "react"
import axios from "axios"
function ExternalUrl() {
  const [urlRedirect, setUrlRedirect] = useState("")
  
  useEffect(() =>{
    const shortUrl = window.location.href.split("/urlchopper/")
    const OriginalUrl = async () => {
       await axios.get(`http://localhost:3003/urlchopper/url/${shortUrl[shortUrl.length-1]}`).then((response) => {
         setUrlRedirect(response.data)
        })
    }
    OriginalUrl()

  },[])

  const pageRender = urlRedirect!== "" ? (window.location.href = urlRedirect) : "Rendering"
  return (
    <div className="external-url-view">      
      {pageRender}
    </div>
  );
}
export default ExternalUrl;
