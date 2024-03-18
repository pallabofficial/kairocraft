import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">hello world</h1>
      <div className="pt-[4.75rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          something
        </Button>
        
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
