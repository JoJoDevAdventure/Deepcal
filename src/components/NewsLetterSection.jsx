import React, { useState } from 'react';

const NewsLetterSection = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccessMessage("Sending...");

    const formData = new FormData();
    formData.append("access_key", "cd8391e9-ca2a-49f8-8724-f8c41ba0c1f0"); // Replace with your Web3Forms access key
    formData.append("email", email);

    try {
      // Submit to Web3Forms for email
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const emailData = await emailResponse.json();

      // Check response from Web3Forms
      if (emailData.success) {
        setSuccessMessage("Subscribed successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error('Error!', error.message);
      setSuccessMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-center bg-gray-100 p-8 py-20  w-[100%] lg:w-full  px-4 md:px-14 lg:px-[12%] gap-12 md:gap-0">
      <img
        src="./news.jpg"
        alt="Newsletter"
        className="md:w-[50%] w-[90%] rounded-lg"
      />
      <div className="md:ml-8 ml-0 md:w-2/3 w-[90%]">
        <h1 className="md:text-3xl text-2xl font-bold mb-4">Subscribe to our<span className='text-[#0582B8]'> Newsletter</span></h1>
        <p className="mb-4">Stay updated with our latest news and offers.</p>
        <form onSubmit={handleSubscribe} className='flex flex-row gap-4'>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-black text-white hover:text-black hover:border-black border-2 py-2 rounded hover:bg-transparent border-black w-[40%] md:w-[30%]"
          >
            Subscribe
          </button>
          <p className="text-center mt-4 mb-4">{successMessage}</p>
        </form>
        <p className="mb-4 mt-8">Don't forget to follow us on social media ! </p>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.youtube.com/@deep_cal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="512px"
              id="Layer_1"
              className="w-8 h-8 text-[#8F8F8F]"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <g>
                  <path d="M265,96c65.3,0,118.7,1.1,168.1,3.3l0.7,0h0.7c23.1,0,42,22,42,49.1v1.1l0.1,1.1c2.3,34,3.4,69.3,3.4,104.9v0v0    c0.1,35.6-1.1,70.9-3.4,104.9l-0.1,1.1v1.1c0,13.8-4.7,26.6-13.4,36.1c-7.8,8.6-18,13.4-28.6,13.4h-0.8l-0.8,0    c-52.9,2.5-108.8,3.8-166.4,3.8c-3.5,0-7.1,0-10.6,0H256h-0.1c-3.6,0-7.2,0-10.8,0c-57.8,0-113.7-1.3-166.2-3.7l-0.8,0h-0.8    c-10.6,0-20.7-4.8-28.5-13.4c-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-0.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-0.1v-0.1    c-0.1-35.3,1-70.5,3.3-104.6l0.1-1.1v-1.1c0-27.2,18.8-49.3,41.9-49.3H78l0.7,0c49.5-2.3,102.9-3.3,168.2-3.3h9H265 M265,64    c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,0.8-169.6,3.3c-40.8,0-73.9,36.3-73.9,81.3C1,184.4-0.1,220,0,255.7    c-0.1,35.7,0.9,71.3,3.4,107c0,45,33.1,81.6,73.9,81.6c54.8,2.6,110.7,3.8,167.8,3.8c3.6,0,7.3,0,10.9,0c3.6,0,7.2,0,10.7,0    c57.1,0,113-1.2,167.9-3.8c40.9,0,74-36.6,74-81.6c2.4-35.7,3.5-71.4,3.4-107.1c0.1-35.7-1-71.3-3.4-107.1c0-45-33.1-81.1-74-81.1    C379.2,64.8,322.7,64,265,64L265,64z" />
                </g>
                <g>
                  <path d="M207,353.8V157.4l145,98.2L207,353.8z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/deepcal/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#8F8F8F]"
            >
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  fill-rule="nonzero"
                />
              </g>
            </svg>{" "}
          </a>
          <a
            href="https://x.com/deep_cal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-[#8F8F8F]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="none"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;