import "./App.css";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Adduser from "./pages/Adduser";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={ <Adduser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/View/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
