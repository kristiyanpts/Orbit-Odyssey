import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";
import Home from "./components/static/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Store from "./components/main/Store";
import Destinations from "./components/main/Destinations/Destinations";
import SolarSystem from "./components/main/Destinations/SolarSystem";
import MilkyWay from "./components/main/Destinations/MilkyWay";
import ExoticPlanets from "./components/main/Destinations/ExoticPlanets";
import Footer from "./components/shared/Footer";
import About from "./components/static/About";
import FAQs from "./components/static/FAQ";
import ContactUs from "./components/static/ContactUs";

function App() {
  return (
    <>
      <Header />

      <section className="relative h-fit w-full flex flex-col box-border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/solar-system" element={<SolarSystem />} />
          <Route path="/milky-way" element={<MilkyWay />} />
          <Route path="/exotic-planets" element={<ExoticPlanets />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </section>

      <Footer />
    </>
  );
}

export default App;
