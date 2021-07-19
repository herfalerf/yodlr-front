import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./nav-routes/Routes";
import NavBar from "./nav-routes/NavBar";
import YodlrApi from "./api/api";

function App() {
  async function signup(signupData) {
    try {
      let user = await YodlrApi.signup(signupData);
      user.success = true;
      return user;
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes signup={signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
