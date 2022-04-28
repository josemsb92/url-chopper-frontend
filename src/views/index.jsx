import UrlForm from "../Components/UrlForm";
import Navbar from "../Components/Navbar"
function MainView() {
  return (
    <div className="main-view">      
      <Navbar />
      <p>A simple website to chopp and prepare your links to be easy to carry them.</p>
      <UrlForm />
    </div>
  );
}
export default MainView;
