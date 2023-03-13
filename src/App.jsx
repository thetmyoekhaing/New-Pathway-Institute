import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);

  const handleChange = (newBoolean) => {
    setDarkToggle(newBoolean);
  };

  return (
    <div className={`${darkToggle && "dark"}`}>
      <Navbar onChange={handleChange} dark={darkToggle} />
      <Footer />
    </div>
  );
};

export default App;
