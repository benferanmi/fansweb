import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import ModelDetails from "./Models/ModelDetails";
import Models from "./Models/Models";
import Signup from "./pages/Signup";
import ModelForm from "./pages/Form";
import ProfilePage from "./pages/ProfilePage";
import DataFetch from "./DataFetch";

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
        <Route path="modelRegistration" element={<ModelForm />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="data2" element={<DataFetch />}></Route>
      </Routes>
    </>
  );
}

export default App;
