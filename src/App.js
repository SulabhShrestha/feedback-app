
import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ModifyPage from "./pages/ModifyPage";


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/modify/:id/:name" element={<ModifyPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
