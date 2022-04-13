import "./App.css";
import MainView from "./views/index"
import ExternalUrl from "./views/externalUrl"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainView/>} />
            <Route path="/urlchopper/:shortUrl" element={<ExternalUrl/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
