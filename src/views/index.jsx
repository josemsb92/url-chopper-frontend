import UrlForm from "../Components/UrlForm";
import Navbar from "../Components/Navbar"
function MainView() {
  return (
    <div className="main-view">      
      <Navbar />
      <div className="main-section">
      <p>A simple website to chopp and prepare your links to be easy to carry them.</p>
      <UrlForm />    
      </div>
       
    </div>
  );
}
export default MainView;
