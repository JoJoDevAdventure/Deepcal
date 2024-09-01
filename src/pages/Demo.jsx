import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, NavBar } from "../components";

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Append access key for email submission
    formData.append("access_key", "cd8391e9-ca2a-49f8-8724-f8c41ba0c1f0");

    try {
      // Submit to Web3Forms for email
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const emailData = await emailResponse.json();

      // Check response from Web3Forms
      if (emailData.success) {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="bg-background bg-cover bg-center min-h-[100vh] px-4 md:px-14 lg:px-[12%] bg-[#0C0C0C] text-white">
      <NavBar />

      <div className=" py-12 flex flex-col items-center justify-center">
        {!submitted ? (
          <>
            <h1 className="text-3xl font-bold mb-4 md:text-center">
              Do you want to test our{" "}
              <span className="text-[#53A9CE]">software?</span>
            </h1>
            <p className="mb-8 w-full md:w-[450px] md:text-center">
              You can start by filling out our questionnaire, and we will get
              back to you within 24 hours.
            </p>
            <form  name="Demo Form : Demo page" onSubmit={handleSubmit} className="w-full md:w-[450px]">
                <input type="hidden" name="subject" value='Request for demo'/>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="industry"
                >
                  What industry are you in?
                </label>
                <input
                  id="industry"
                  name="Industry"
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="functions"
                >
                  What kind of functions are the cameras being used for?
                </label>
                <input
                  id="functions"
                  name="Cameras are being used for"
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="cameras"
                >
                  How many cameras are there?
                </label>
                <input
                  id="cameras"
                  name="Number of cameras"
                  type="number"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="results"
                >
                  How often do you want results?
                </label>
                <input
                  id="results"
                  name="I want results"
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="ground-truth"
                >
                  What is your ground truth? What are we being compared against?
                </label>
                <input
                  id="ground-truth"
                  name="Compared against"
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="success"
                >
                  What does success look like for you? What is your target
                  accuracy?
                </label>
                <input
                  id="success"
                  name="Target accuracy"
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  What's your e-mail?
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-sm focus:shadow-white bg-transparent text-white"
                />
              </div>

              <button
                type="submit"
                className="bg-white hover:bg-transparent text-black hover:text-white hover:border hover:border-1 border-1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Thank you for submitting!</h2>
            <p>You will be redirected shortly...</p>
          </div>
        )}
      </div>

      <Footer bg="black" />
    </div>
  );
};

export default Demo;
