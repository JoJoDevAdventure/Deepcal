import { motion } from "framer-motion";
import React, { useState } from "react";
import { Footer, NavBar } from "../components";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Append access key for email submission
    formData.append("access_key", "cd8391e9-ca2a-49f8-8724-f8c41ba0c1f0");

    try {
      // Submit to Web3Forms for email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      // Check response from Web3Forms
      if (data.success) {
        setTimeout(() => {
          setSubmitted(true);
          form.reset(); // Reset the form after success
        }, 5000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div className="bg-[url('/background-image.jpeg')] bg-cover bg-center min-h-[100vh] px-2 md:px-14 lg:px-[12%] flex flex-col justify-between">
      <NavBar />
      <motion.div
        className="p-8 bg-white rounded shadow-lg flex flex-col items-center justify-center mx-[20%]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {submitted ? (
          <h1 className="text-3xl font-bold text-center">
            Thank you for joining our newsletter!
          </h1>
        ) : (
          <div className="mt-4 w-full">
            <h1 className="text-3xl font-bold text-center">
              Subscribe to Our Newsletter!
            </h1>
            <p className="text-center text-sm mt-2">
              Join our mailing list to receive the latest news and updates from
              our team.
            </p>
            <form
              className="flex flex-col items-center justify-center mt-4"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="subject"
                value="New newsletter subscriber from newsletter"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 p-2 w-3/4 border rounded"
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 p-2 w-3/4 border rounded"
                name="email"
              />
              <button
                type="submit"
                className="mt-4 bg-[#0582B8] hover:border-[#0582B8] hover:bg-transparent border-2 hover:text-[#0582B8] text-white font-bold py-2 px-4 rounded w-3/4"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
      </motion.div>
      <Footer bg={"black"} />
    </div>
  );
};

export default Newsletter;
