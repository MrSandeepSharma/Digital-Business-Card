import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Components/Info";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
