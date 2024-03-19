import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header"
import Hero from "./components/Hero"
import Button from "./components/Button";

const App = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] overflow-hidden | lg:pt-[5.25rem]">
        <Header />
        
        <Hero/>
        
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
