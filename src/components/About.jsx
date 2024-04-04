import { motion, useScroll } from "framer-motion";
import { React, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "../config/motion";

const About = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const rightSectionHeight = rightSectionRef.current.offsetHeight;
    leftSectionRef.current.style.height = `${rightSectionHeight}px`;
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const [block1Ref, block1InView] = useInView({ threshold: 0.3 });
  const [block2Ref, block2InView] = useInView({ threshold: 0.3 });
  const [block3Ref, block3InView] = useInView({ threshold: 0.3 });
  const [block4Ref, block4InView] = useInView({ threshold: 0.3 });

  return (
    <div>
      <div className="bg-[#0C0C0C] h-full px-8 md:px-12 lg:px-[150px] text-white lg:pb-[6.5%] pb-[12.8%] hidden md:flex relative">
        {/* Left Section */}
        <div className="w-[45%]" ref={leftSectionRef}>
          {/* Fixed line */}
          <div className="absolute left-1/2 transform md:translate-x-[35px] lg:translate-x-[40px] border-l-2 border-white h-[70%] lg:h-[75%]"></div>

          <div className="absolute left-1 transform translate-x-[80px] lg:translate-x-[185px] border-l-2 border-white h-[40px]"></div>

          <motion.div
            {...slideAnimation("up", 0.6)}
            className="flex justify-start align-top mt-10 items-top"
          >
            {/* Icon with thin border */}
            <div className="bg-[#0C0C0C] lg:w-[80px] lg:h-[80px] w-[70px] h-[70px] border-2 border-white rounded-full flex items-center justify-center">
              {/* Place your icon here */}
              iconNN
            </div>

            {/* Title and description */}
            <div className="ml-4 w-[70%]">
              <h2 className="text-lg font-semibold">WHO ARE WE?</h2>
              <p className="text-sm">
                The current process for calibrating cameras used in cars,
                drones, industrial machines, and last-mile delivery bots is
                slow, expensive, and lacking scalability. DeepCal provides a
                software-only solution that fully automates the entire
                calibration process chain, speeding up development, production,
                and maintenance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="align-top mt-10 h-full">
          {/* Individual blocks */}
          <div
            className="transform absolute left-1/2 w-[45%] lg:w-[40%]"
            ref={rightSectionRef}
          >
            {/* Block 1 */}
            <motion.div
              {...slideAnimation("up", 0.8)}
              className="flex mb-10 justify-start align-top items-top"
            >
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">SOFTWARE ONLY</h2>
                <p className="text-sm">
                  Minimize resource needs, accelerating processes while reducing
                  manual labor and time commitments.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              {...slideAnimation("up", 1.2)}
              className="flex mb-8 justify-start align-top items-top"
            >
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Real-time & ONLINE</h2>
                <p className="text-sm">
                  Enhance performance and safety by enabling immediate and
                  continuous data access and analysis.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              {...slideAnimation("up", 1.8)}
              className="flex justify-start align-top items-top"
            >
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Markerless</h2>
                <p className="text-sm">
                  Streamline operations by eliminating the need for additional
                  hardware, simplifying setup and maintenance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TODO: Fix line on mobile */}

      {/* MOBILE VERS */}

      <div
        ref={ref}
        className="bg-[#0C0C0C] w-full h-full px-8 text-white pb-[15%] block md:hidden relative "
      >
        {/* Fixed line */}
        <motion.div
          className="absolute left-[65px] transform translate-x-[65px] border-r-2 border-white h-[80%]"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top left",
          }}
        ></motion.div>

        <div ref={ref} className="pt-10 z-10 relative">
          {/* Block 1 */}
          <motion.div
            ref={block1Ref}
            className={`flex items-top mb-10 justify-start align-top z-10 transition-all duration-500 ${
              block1InView ? "opacity-100" : "opacity-0"
            }`}
            animate={block1InView ? slideAnimation("up", 0.6) : {}}
          >
            {/* Icon with thin border */}
            <div className="bg-[#0C0C0C] lg:w-[80px] lg:h-[80px] w-[70px] h-[70px] border-2 border-white rounded-full flex items-center justify-center">
              {/* Place your icon here */}
              iconNN
            </div>

            {/* Title and description */}
            <div className="ml-4 w-[70%]">
              <h2 className="text-lg font-semibold">WHO ARE WE?</h2>
              <p className="text-sm">
                The current process for calibrating cameras used in cars,
                drones, industrial machines, and last-mile delivery bots is
                slow, expensive, and lacking scalability. DeepCal provides a
                software-only solution that fully automates the entire
                calibration process chain, speeding up development, production,
                and maintenance.
              </p>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            ref={block2Ref}
            className={`flex items-top mb-10 justify-start align-top z-10 transition-all duration-500 ${
              block2InView ? "opacity-100" : "opacity-0"
            }`}
            animate={block2InView ? slideAnimation("up", 0.6) : {}}
          >
            <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
              {/* Place your icon here */}
              iconNNNN
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">SOFTWARE ONLY</h2>
              <p className="text-sm">
                Minimize resource needs, accelerating processes while reducing
                manual labor and time commitments.
              </p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            ref={block3Ref}
            className={`flex items-top mb-8 justify-start align-top z-2 transition-all duration-500 ${
              block3InView ? "opacity-100" : "opacity-0"
            }`}
            animate={block3InView ? slideAnimation("up", 0.6) : {}}
          >
            <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
              {/* Place your icon here */}
              iconNNNN
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Real-time & ONLINE</h2>
              <p className="text-sm">
                Enhance performance and safety by enabling immediate and
                continuous data access and analysis.
              </p>
            </div>
          </motion.div>

          {/* Block 4 */}
          <motion.div
            ref={block4Ref}
            className={`flex items-top justify-start align-top z-2 transition-all duration-500 ${
              block4InView ? "opacity-100" : "opacity-0"
            }`}
            animate={block4InView ? slideAnimation("up", 0.6) : {}}
          >
            <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
              {/* Place your icon here */}
              iconNNNN
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Markerless</h2>
              <p className="text-sm">
                Streamline operations by eliminating the need for additional
                hardware, simplifying setup and maintenance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
