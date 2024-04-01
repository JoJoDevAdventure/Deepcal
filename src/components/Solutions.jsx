import React from 'react';

// Solution component
const Solution = ({ title, description, image, imgPosition }) => {
  return (
    <div className={`h-[249px] w-full flex md:flex-row items-center my-8 justify-center ${imgPosition === 'left' ? "pl-4" : "pr-4"} transition duration-300 ease-in-out transform hover:shadow-lg`}>

      {imgPosition === 'right' && (
        <div className="md:mr-8 mb-4 md:mb-0">
          <img src={image} alt={title} className="w-[337px] h-[249px] rounded-s" />
        </div>
      )}

      <div className="md:text-left text-center w-auto">
        <h2 className="text-3xl font-medium mb-2">{title}</h2>
        <p>{description}</p>
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
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        image="./adas.jpg"
        imgPosition="right"
      />
      <Solution
        title="Solution 3"
        description="Fusce nec justo sed sem vehicula egestas. Nullam ultricies lobortis nunc nec consequat."
        image="./robotics.jpg"
        imgPosition="left"
      />
      <Solution
        title="Solution 4"
        description="Vestibulum eu lorem eu neque hendrerit fermentum ac vitae lorem. Cras fermentum malesuada neque, vel sollicitudin lorem gravida vel."
        image="./industrial.jpg"
        imgPosition="right"
      />
      <Solution
        title="Solution 5"
        description="Quisque ultricies enim ut mauris ultrices, id placerat neque ultricies. Curabitur eu pharetra est."
        image="./truck.jpg"
        imgPosition="left"
      />
    </div>
  );
};

export default Solutions;
