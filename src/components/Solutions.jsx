import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Solution component
const Solution = ({ title, description, image, imgPosition }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  // Animation variants
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: imgPosition === "right" ? -200 : 200 },
  };

  // Trigger animation when block enters viewport
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className={`md:h-[249px] w-[90%] lg:w-full flex md:flex-row items-center my-8 justify-between flex-col mx-auto align-middle ${
        imgPosition === "right" ? "" : "pl-4"
      } transition duration-800 ease-out transform shadow-drop`}
      ref={ref}
    >
      {imgPosition === "right" && (
        <motion.div
          className="md:mr-8 mb-0 radius-0"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img
            src={image}
            alt={title}
            className="w-[337px] h-[249px] object-cover"
          />
        </motion.div>
      )}

      <div className={`md:text-left text-center w-[60%] `}>
        <motion.h2
          className="text-3xl font-medium mb-2 text-[#0582B8]"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {title}
        </motion.h2>
        <motion.p
          className=""
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {description}
        </motion.p>
      </div>

      {imgPosition !== "right" && (
        <motion.div
          className="ml-0 mb-0"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <img
            src={image}
            alt={title}
            className="w-[337px] h-[249px] object-cover"
          />
        </motion.div>
      )}
    </section>
  );
};

const SolutionMobile = ({ title, description, image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 1 });

  // Animation variants
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 1, y: 10 },
    hidden2: { opacity: 0, y: 10 },
  };

  // Trigger animation when block enters viewport
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="relative overflow-hidden px-2 py-2">
      <div ref={ref} className="relative">
        <motion.div
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center text-white text-center p-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.div initial="hidden" animate={controls} variants={variants}>
            <h2 className="text-s font-semibold mb-2">{title}</h2>
            <p className="text-[12px]">{description}</p>
          </motion.div>
        </motion.div>
        <motion.img
          src={image}
          alt={title}
          className="w-full"
          initial="hidden2"
          animate={controls}
          variants={variants}
        />
      </div>
    </div>
  );
};

// Solutions component
const Solutions = () => {
  return (
    <section
      id="solutions"
      className="max-w-4xl mx-auto text-center mt-[5%] mb-[10%]"
    >
      <h2 className="text-2xl md:text-4xl font-semibold border-b-2 border-gray-400 inline-block mb-8 pb-2">
        Our <span className="text-[#0582B8]">Solutions</span> 
      </h2>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Solution
          title="Autonomous Mobility"
          description="Autonomous driving relies on multiple sensors functioning in harmony. Vehicles must monitor their surroundings, recognize approaching obstacles, and plan their routes. Uncalibrated or misaligned sensors can pose serious risks, potentially leading to injuries or fatalities."
          image="./autonomus.jpg"
          imgPosition="left"
        />
        <Solution
          title="ADAS (Advanced Driver Assistance Systems)"
          description="More and more cars on the road nowadays are equipped with Advanced Driver Assistance Systems (ADAS). While ADAS can improve road safety, it's essential that the sensors are properly calibrated. DeepCal's sophisticated Zero-Click Software automatically calibrates the sensors, ensuring the vehicle functions as it should."
          image="./adas.jpg"
          imgPosition="right"
        />
        <Solution
          title="Robotics"
          description="Our specialized calibration software represents one of the first software-based approaches in the robotics industry. Uneven and complex terrain can pose challenges for sensors operating in unison. Our Zero-Click solution offers solutions for both indoor and outdoor environments."
          image="./robotics.jpg"
          imgPosition="left"
        />
        <Solution
          title="Industrial Automation"
          description="Calibrating sensors is a critical process in Industrial Automation that should not be overlooked. Let our cost-efficient and fast Zero-Click solution take care of your sensor calibration needs."
          image="./industrial.jpg"
          imgPosition="right"
        />
        <Solution
          title="Trucking"
          description="DeepCal's automotive software is designed to address your sensor calibration needs for trucking. We offer a cost-efficient solution that doesn't require any additional hardware."
          image="./truck.jpg"
          imgPosition="left"
        />
      </div>
      {/* Mobile view */}
      <div className="md:hidden">
        <SolutionMobile
          title="Autonomous Mobility"
          description="Autonomous driving relies on multiple sensors functioning in harmony. Vehicles must monitor their surroundings, recognize approaching obstacles, and plan their routes. Uncalibrated or misaligned sensors can pose serious risks, potentially leading to injuries or fatalities."
          image="./autonomus.jpg"
        />
        <SolutionMobile
          title="ADAS"
          description="More and more cars on the road nowadays are equipped with Advanced Driver Assistance Systems (ADAS). While ADAS can improve road safety, it's essential that the sensors are properly calibrated. DeepCal's sophisticated Zero-Click Software automatically calibrates the sensors, ensuring the vehicle functions as it should."
          image="./adas.jpg"
        />
        <SolutionMobile
          title="Robotics"
          description="Our specialized calibration software represents one of the first software-based approaches in the robotics industry. Uneven and complex terrain can pose challenges for sensors operating in unison. Our Zero-Click solution offers solutions for both indoor and outdoor environments."
          image="./robotics.jpg"
        />
        <SolutionMobile
          title="Industrial Automation"
          description="Calibrating sensors is a critical process in Industrial Automation that should not be overlooked. Let our cost-efficient and fast Zero-Click solution take care of your sensor calibration needs."
          image="./industrial.jpg"
        />
        <SolutionMobile
          title="Trucking"
          description="DeepCal's automotive software is designed to address your sensor calibration needs for trucking. We offer a cost-efficient solution that doesn't require any additional hardware."
          image="./truck.jpg"
        />
      </div>
    </section>
  );
};

export default Solutions;
