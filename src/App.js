import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ModelDetails from "./Models/ModelDetails";
import Models from "./Models/Models";
import FanSignup from "./pages/FanSignup";
import ModelForm from "./pages/Form";
import Register from "./pages/Register";
import ModelSignUp from "./pages/ModelSiginUp";
import SingleModel from "./Models/SingleModelReal";
import ModelProfile from "./Models/ModelProfile";
import ModelLogin from "./pages/ModelLogin";
import FanLogin from "./pages/FanLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='user' element={ <User />} /> */}
        <Route path="fan-signup" element={<FanSignup />} />
        <Route path="model-signup" element={<ModelSignUp />} />
        <Route path="model-login" element={<ModelLogin />} />
        <Route path="fan-login" element={<FanLogin/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route exact path="/models" element={<Models />}></Route>
        <Route path="/models/:productId" element={<ModelDetails />}></Route>
        <Route path="/model/:productId" element={<SingleModel />}></Route>
        <Route path="modelRegistration" element={<ModelForm />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="profile" element={<ModelProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
