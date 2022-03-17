import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

import axios from "axios";
import { useState } from "react";

import "./styles/App.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  // console.log(name,email,password,reEnteredPassword)
  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/user/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 201) {
          setShowLogin(true);
        }
        if (res.data.status === 400) {
          alert("email already registered!");
        }
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/user/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          const { user, token } = res.data;
          console.log(token);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", JSON.stringify(token));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* testing login */}
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "#fff",
          padding: "20px 0",
        }}
        className="App-header"
      >
        Hello E-commerce
      </h1>
      <form
        onSubmit={handleSubmitRegistration}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px 0",
        }}
      >
        <label>name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button style={{ marginTop: "10px" }} type="submit">
          register
        </button>
      </form>
      {showLogin && (
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "20px   auto",
            padding: "20px 0",
          }}
        >
          <label>email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label>password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={{ marginTop: "10px" }} type="submit">
            login
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
