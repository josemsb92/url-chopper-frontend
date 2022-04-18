import {useState, useEffect} from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';

function ExternalUrl() {
  const [urlRedirect, setUrlRedirect] = useState("")
  
  useEffect(() =>{
    const shortUrl = window.location.href.split("/urlchopper/")
    const OriginalUrl = async () => {
       await axios.get(`http://localhost:3003/urlchopper/url/${shortUrl[shortUrl.length-1]}`).then((response) => {
         const data = [...response.data]
        setUrlRedirect(data[0].OriginalUrl)
        })
    }
    OriginalUrl()

  },[])
  const pageRender = urlRedirect === ""? <div className="main-spinner"><CircularProgress /> </div>: ""
  urlRedirect!== "" && (window.location.href = urlRedirect)
  return (
    <div className="external-url-view">      
      {pageRender}
    </div>
  );
}
export default ExternalUrl;
