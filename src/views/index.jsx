import UrlForm from "../Components/UrlForm";
import Navbar from "../Components/Navbar"
function MainView() {
  return (
    <div className="main-view">      
      <Navbar />
      <div className="main-section">      
      <UrlForm />    
      </div>       
    </div>
  );
}
export default MainView;
