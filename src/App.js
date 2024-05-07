// App.js
import React from "react";
// import { Switch, Route } from "react-router-dom";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Menu from "./assets/components/shared/Menu";
import Footer from "./assets/components/shared/Footer";
import Home from "./assets/components/Home/Home.js";
import Registro from "./assets/components/Registro/Registro.js";
import Login from "./assets/components/Login/Login.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/registro" element={<Registro></Registro>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
      {/* Otros routes */}
      <BrowserRouter>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
