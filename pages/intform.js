import React from "react";
import { Footer, Navbar } from "../components";
import IntakeForm from "../sections/IntakeForm";

const intform = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <IntakeForm />
      <Footer />
    </div>
  );
};

export default intform;
