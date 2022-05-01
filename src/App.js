import "./assets/styles.scss";
import MainView from "./views/index"
import ExternalUrl from "./Components/externalUrl"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainView/>} />
            <Route path="/:generatedUrl" element={<ExternalUrl/>}/>
          </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
