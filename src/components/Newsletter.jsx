import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show pop-up after 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const closePopup = () => {
    setIsVisible(false);  
  };

  const handleSubscribe = () => {
    // Handle subscribe logic here
    alert("Subscribed!");
    closePopup();
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
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleSubscribe}
              className="w-full bg-black text-white border-2 hover:text-black hover:border-black border-white hover:border-transparent py-2 rounded hover:bg-transparent"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Newsletter;
