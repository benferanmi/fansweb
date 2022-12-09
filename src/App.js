import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Privacy from "./Privacy";
import ModelDetails from "./Models/ModelDetails";
import Models from "./Models/Models";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='user' element={ <User />} /> */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route exact path="/models" element={<Models />}></Route>
        <Route path="/models/:productId" element={<ModelDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
