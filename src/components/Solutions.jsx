import React from 'react';

// Solution component
const Solution = ({ title, description, image, imgPosition }) => {
  return (
    <div className={`h-[249px] w-full flex md:flex-row items-center my-8 justify-between ${imgPosition === 'left' ? "pl-4" : "pr-4"} transition duration-300 ease-in-out transform shadow-drop`}>

      {imgPosition === 'right' && (
        <div className="md:mr-8 mb-4 md:mb-0">
          <img src={image} alt={title} className="w-[337px] h-[249px] object-cover rounded-s" />
        </div>
      )}

      <div className="md:text-left text-center w-[60%]">
        <h2 className="text-3xl font-medium mb-2">{title}</h2>
        <p className=''>{description}</p>
      </div>

      {imgPosition !== 'right' && (
        <div className="md:ml-8 mb-4 md:mb-0">
          <img src={image} alt={title} className="w-[337px] h-[249px] object-cover rounded-s" />
        </div>
      )}
    </div>
  );
};

// Solutions component
const Solutions = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-[5%]">
      <h2 className="text-4xl font-semibold border-b-2 border-gray-400 inline-block mb-8 pb-2">Our Solutions</h2>
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
  );
};

export default Solutions;
