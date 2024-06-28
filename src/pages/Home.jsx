import React from "react";
import { About, Contact, Footer, Header, Solutions } from "../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="app transition-all ease-in h-full relative">
      <Helmet>
        <title>Deepcal</title>
        <meta name="description" content={"DeepCal provides a software-only solution that fully automates the entire calibration process chain, speeding up development, production, and maintenance."} />
        <meta name="keywords" content={"Sensors, Deepcal, Software calibration, sensors software, sensors calibration"} />
        <meta property="og:title" content={"Deepcal"} />
      </Helmet>
      <Header/>
      <About />
      <Solutions/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default Home;
