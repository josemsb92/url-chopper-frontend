import {useState, useEffect} from "react"
import axios from "axios"
function ExternalUrl() {
  const [urlRedirect, setUrlRedirect] = useState("") //Necesito hacer un getUrl con req.param y cortar por el codigo para obtener el link
  const shortUrl = window.location.href.split("/urlchopper/")

  useEffect(() =>{
    const OriginalUrl = async () => {
       await axios.get(`localhost:3003/urlchopper/url/nH1Mt5`).then((response) => console.log(response))
    }
    OriginalUrl()


  },[])
  
  return (
    <div className="test-view">
      {/* {(window.location.href = urlRedirect)} */}
    </div>
  );
}
export default ExternalUrl;
