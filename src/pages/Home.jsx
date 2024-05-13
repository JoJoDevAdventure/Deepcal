import React from "react";
import { About, Contact, Footer, Header, Solutions } from "../components";

const Home = () => {
  return (
    <div className="app transition-all ease-in h-full relative">
      <Header/>
      <About />
      <Solutions/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default Home;
