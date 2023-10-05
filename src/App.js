// Import components
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Logo from "./components/Navbar/Logo";
import NavItem from "./components/Navbar/NavItem";
import HeroDetails from "./components/HeroDetails";

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={<Logo text={"Marvel"} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
