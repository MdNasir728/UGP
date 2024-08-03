import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CheckWaterQuality from "./pages/CheckWaterQuality";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SaltSolverApp from './salt/Salt'

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-x-hidden">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/check-water-quality" element={<CheckWaterQuality />} />
          <Route path="/brewing-salt-calculator" element={<SaltSolverApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      {/* <Dummy /> */}
    </div>
  );
}

export default App;
