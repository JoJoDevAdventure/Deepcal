import { React, useEffect, useRef } from "react";

const About = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const lineHeight = useRef(null);

  useEffect(() => {
    const rightSectionHeight = rightSectionRef.current.offsetHeight;
    leftSectionRef.current.style.height = `${rightSectionHeight}px`;
    lineHeight.current.style.height = `${rightSectionHeight - 20}px`;
  }, []);

  return (
    <div>
      <div className="bg-[#0C0C0C] h-full px-8 md:px-12 lg:px-20 text-white lg:pb-[5%] pb-[15%] hidden md:flex">
        {/* Left Section */}
        <div className="w-[45%]" ref={leftSectionRef}>
          {/* Fixed line */}
          <div
            className="absolute left-1/2 transform translate-x-[35px] lg:translate-x-[40px] border-l-2 border-white"
            ref={lineHeight}
          ></div>
          <div className="absolute left-1 transform translate-x-[80px] lg:translate-x-[115px] border-l-2 border-white h-[40px]"></div>

          <div className="flex justify-start align-top mt-10 items-top">
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
          </div>
        </div>

        {/* Right Section */}
        <div className="align-top mt-10 h-full">
          {/* Individual blocks */}
          <div
            className="transform absolute left-1/2 w-[45%]"
            ref={rightSectionRef}
          >
            {/* Block 1 */}
            <div className="flex mb-10 justify-start align-top items-top">
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">SOFTWARE ONLY</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Mauris commodo
                  malesuada condimentum elementum. Mattis metus donec nunc
                  turpis tincidunt tristique aliquam aliquet cras.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex mb-8 justify-start align-top items-top">
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Real-time & ONLINE</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Mauris commodo
                  malesuada condimentum elementum. Mattis metus donec nunc
                  turpis tincidunt tristique aliquam aliquet cras.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex justify-start align-top items-top">
              <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
                {/* Place your icon here */}
                iconNNNN
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Markerless</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Mauris commodo
                  malesuada condimentum elementum. Mattis metus donec nunc
                  turpis tincidunt tristique aliquam aliquet cras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Fix line on mobile */}

      {/* MOBILE VERS */}

      <div className="bg-[#0C0C0C] w-full h-full px-8 md:px-12 lg:px-20 text-white lg:pb-[5%] pb-[15%] block md:hidden gap-8">
        {/* Fixed line */}
        <div className="absolute left-1 transform translate-x-[60px] border-l-2 border-white h-[80%] z-1"></div>

        <div className="flex items-top mb-10 justify-start align-top z-2">
          {/* Icon with thin border */}
          <div className="bg-[#0C0C0C] lg:w-[80px] lg:h-[80px] w-[70px] h-[70px] border-2 border-white rounded-full flex items-center justify-center">
            {/* Place your icon here */}
            iconNN
          </div>

          {/* Title and description */}
          <div className="ml-4 w-[70%]">
            <h2 className="text-lg font-semibold">WHO ARE WE?</h2>
            <p className="text-sm">
              The current process for calibrating cameras used in cars, drones,
              industrial machines, and last-mile delivery bots is slow,
              expensive, and lacking scalability. DeepCal provides a
              software-only solution that fully automates the entire calibration
              process chain, speeding up development, production, and
              maintenance.
            </p>
          </div>
        </div>

        {/* Block 1 */}
        <div className="flex items-top mb-10 justify-start align-top z-10">
          <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
            {/* Place your icon here */}
            iconNNNN
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">SOFTWARE ONLY</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Mauris commodo malesuada
              condimentum elementum. Mattis metus donec nunc turpis tincidunt
              tristique aliquam aliquet cras.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex items-top mb-8 justify-start align-top z-2">
          <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
            {/* Place your icon here */}
            iconNNNN
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Real-time & ONLINE</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Mauris commodo malesuada
              condimentum elementum. Mattis metus donec nunc turpis tincidunt
              tristique aliquam aliquet cras.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex items-top justify-start align-top z-2">
          <div className="bg-[#0C0C0C] w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border-2 border-white rounded-full flex items-center justify-center">
            {/* Place your icon here */}
            iconNNNN
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Markerless</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Mauris commodo malesuada
              condimentum elementum. Mattis metus donec nunc turpis tincidunt
              tristique aliquam aliquet cras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
