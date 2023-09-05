import "./App.css";
import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import AnimatedCursor from "react-animated-cursor";
import DarkModeProvider from "./DarkModeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import { Contact } from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="83, 92, 121"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type="checkbox"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <DarkModeProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </Router>
          </DarkModeProvider>
        </>
      )}
    </>
  );
}

export default App;
