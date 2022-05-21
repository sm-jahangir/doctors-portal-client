import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Review from "./Pages/Review/Review";
import Login from "./Pages/Auth/Login/Login";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
