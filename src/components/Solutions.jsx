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
          className="text-3xl font-medium mb-2"
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
    <div className="relative overflow-hidden px-8 py-4">
      <div ref={ref} className="relative">
        <motion.div
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center text-white text-center p-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.div initial="hidden" animate={controls} variants={variants}>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
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
    <section id="solutions" className="max-w-4xl mx-auto text-center mt-[5%] mb-[10%]">
      <h2 className="text-2xl md:text-4xl font-semibold border-b-2 border-gray-400 inline-block mb-8 pb-2">
        Our Solutions
      </h2>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Solution
          title="Autonomous Mobility"
          description="Empower vehicles to navigate and operate independently, enhancing safety and efficiency in transportation systems with intelligent sensor-based technology."
          image="./autonomus.jpg"
          imgPosition="left"
        />
        <Solution
          title="ADAS (Advanced Driver Assistance Systems)"
          description="Revolutionize driving experiences by providing real-time alerts, assistance, and automated features, ensuring safer and more convenient journeys for all."
          image="./adas.jpg"
          imgPosition="right"
        />
        <Solution
          title="Robotics"
          description="Elevate automation capabilities with sensor-driven precision and adaptability, empowering robots to perform complex tasks efficiently in diverse environments."
          image="./robotics.jpg"
          imgPosition="left"
        />
        <Solution
          title="Industrial Automation"
          description="Optimize manufacturing processes with sensor technology, enabling seamless integration, precise control, and enhanced productivity across industrial operations."
          image="./industrial.jpg"
          imgPosition="right"
        />
        <Solution
          title="Trucking"
          description="Transform transportation logistics with sensor-driven insights, improving fleet management, safety, and efficiency in the trucking industry for smoother operations."
          image="./truck.jpg"
          imgPosition="left"
        />
      </div>
      {/* Mobile view */}
      <div className="md:hidden">
        <SolutionMobile
          title="Autonomous Mobility"
          description="Empower vehicles to navigate and operate independently, enhancing safety and efficiency in transportation systems with intelligent sensor-based technology."
          image="./autonomus.jpg"
        />
        <SolutionMobile
          title="ADAS (Advanced Driver Assistance Systems)"
          description="Revolutionize driving experiences by providing real-time alerts, assistance, and automated features, ensuring safer and more convenient journeys for all."
          image="./adas.jpg"
        />
        <SolutionMobile
          title="Robotics"
          description="Elevate automation capabilities with sensor-driven precision and adaptability, empowering robots to perform complex tasks efficiently in diverse environments."
          image="./robotics.jpg"
        />
        <SolutionMobile
          title="Industrial Automation"
          description="Optimize manufacturing processes with sensor technology, enabling seamless integration, precise control, and enhanced productivity across industrial operations."
          image="./industrial.jpg"
        />
        <SolutionMobile
          title="Trucking"
          description="Transform transportation logistics with sensor-driven insights, improving fleet management, safety, and efficiency in the trucking industry for smoother operations."
          image="./truck.jpg"
        />
      </div>
    </section>
  );
};

export default Solutions;
