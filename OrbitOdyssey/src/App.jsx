import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";
import Home from "./components/static/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Store from "./components/main/Store";

function App() {
  return (
    <>
      <Header />

      <section className="relative h-full w-full flex flex-col box-border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
