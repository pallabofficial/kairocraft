import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] overflow-hidden | lg:pt-[5.25rem]">
        <Header />
        
        <Hero/>
        <Benefits/>
        <Collaboration/>
        
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
