import "./assets/styles.scss";
import React, { useState } from "react";
import MainView from "./views/index";
import ExternalUrl from "./Components/externalUrl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const userContext = React.createContext({
  user: "EL USER",
  setUser: () => {},
});
export { userContext };
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/:generatedUrl" element={<ExternalUrl />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
