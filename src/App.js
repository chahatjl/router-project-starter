import {Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[isLoggedIn,setIsLoggedin]=useState(false);
  return (

    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedin}
      className=""/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />}/>
      <Route path="/signup" element={<Signup setIsLoggedin={setIsLoggedin} />}/>
      <Route path="/dashboard" element={
        <PrivateRoute setIsLoggedin={setIsLoggedin} >
            <Dashboard/>
        </PrivateRoute>
     }/>
    </Routes>
    </div>
    
  );
}

export default App;
