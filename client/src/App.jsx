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
import TermsOfService from "./components/static/TOS";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./core/contexts/authContext";
import Logout from "./components/user/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import AdminGuard from "./components/guards/AdminGuard";
import Error from "./components/static/Error";
import AdminPanel from "./components/admin/AdminPanel";
import Trips from "./components/main/Destinations/trips";

function App() {
  return (
    <AuthProvider>
      <Toaster position="bottom-right" reverseOrder={true} />

      <Header />

      <section className="relative h-fit w-full flex flex-col box-border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/solar-system" element={<SolarSystem />} />
          <Route path="/milky-way" element={<MilkyWay />} />
          <Route path="/exotic-planets" element={<ExoticPlanets />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/trips" element={<Trips />} />

          {/* Non-Authentication Protected Routes */}
          <Route element={<AuthGuard authenticated={false} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Authentication Protected Routes */}
          <Route element={<AuthGuard authenticated={true} />}>
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Admin Panel Route */}
          <Route element={<AdminGuard />}>
            <Route path="/admin/*" element={<AdminPanel />} />
          </Route>

          {/* 404 Error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      <Footer />
    </AuthProvider>
  );
}

export default App;
