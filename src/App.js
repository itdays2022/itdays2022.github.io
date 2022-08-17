import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainActivity from "./pages/activity/MainActivity";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/main-activity/" element={<MainActivity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
