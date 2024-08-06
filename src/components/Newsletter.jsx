import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show pop-up after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const closePopup = () => {
    setIsVisible(false);  
  };

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
          closePopup();
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
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-lg p-8 relative max-w-sm w-full">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold mb-4">
              Subscribe to our Newsletter
            </h1>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white border-2 hover:text-black hover:border-black border-white hover:border-transparent py-2 rounded hover:bg-transparent"
              >
                Subscribe
              </button>
              <p className="text-center mt-4">{successMessage}</p>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Newsletter;