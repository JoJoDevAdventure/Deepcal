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
    <div
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
    </div>
  );
};

const SolutionMobile = ({ title, description, image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.7 });

  // Animation variants
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0.2, y: 10 },
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
    <div className="relative overflow-hidden px-8 py-2">
      <div ref={ref} className="relative">
        <motion.div
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center text-white text-center p-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
          </div>
        </motion.div>
        <motion.img
          src={image}
          alt={title}
          className="w-full"
          initial="hidden"
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
    <div className="max-w-4xl mx-auto text-center mt-[5%] mb-[10%]">
      <h2 className="text-4xl font-semibold border-b-2 border-gray-400 inline-block mb-8 pb-2">
        Our Solutions
      </h2>
      <div className="hidden md:block">
        <Solution
          title="Solution 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
          image="./autonomus.jpg"
          imgPosition="left"
        />
        <Solution
          title="Solution 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
          image="./adas.jpg"
          imgPosition="right"
        />
        <Solution
          title="Solution 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
          image="./robotics.jpg"
          imgPosition="left"
        />
        <Solution
          title="Solution 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
          image="./industrial.jpg"
          imgPosition="right"
        />
        <Solution
          title="Solution 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
          image="./truck.jpg"
          imgPosition="left"
        />
      </div>
      <div className="md:hidden">
      <SolutionMobile
        title="Solution 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
        image="./autonomus.jpg"
      />
      <SolutionMobile
        title="Solution 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
        image="./adas.jpg"
      />
      <SolutionMobile
        title="Solution 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
        image="./robotics.jpg"
      />
      <SolutionMobile
        title="Solution 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
        image="./industrial.jpg"
      />
      <SolutionMobile
        title="Solution 5"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur elit vel magna sollicitudin aliquet."
        image="./truck.jpg"
      />
      </div>
    </div>
  );
};

export default Solutions;
