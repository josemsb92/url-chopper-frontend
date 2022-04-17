import {useState, useEffect} from "react"
import axios from "axios"
function ExternalUrl() {
  const [urlRedirect, setUrlRedirect] = useState("") //Necesito hacer un getUrl con req.param y cortar por el codigo para obtener el link
  

  useEffect(() =>{
    const shortUrl = window.location.href.split("/urlchopper/")
    const OriginalUrl = async () => {
       await axios.get(`http://localhost:3003/urlchopper/url/${shortUrl[shortUrl.length-1]}`).then((response) => {
         setUrlRedirect(response.data)
        })
    }
    OriginalUrl()

  },[])
  
  return (
    <div className="test-view">
      {console.log(urlRedirect)}
      
      {urlRedirect!== "" ? window.location.href = urlRedirect : ""}
    </div>
  );
}
export default ExternalUrl;
