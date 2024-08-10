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
    <div className="flex items-center justify-center bg-gray-100 p-8 py-20  w-[90%] lg:w-full  px-2 md:px-14 lg:px-[12%]">
      <img
        src="./news.jpg"
        alt="Newsletter"
        className="w-[50%] rounded-lg"
      />
      <div className="ml-8 w-2/3">
        <h1 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h1>
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
            className="bg-black text-white hover:text-black hover:border-black border-2 py-2 rounded hover:bg-transparent border-black w-[30%]"
          >
            Subscribe
          </button>
          <p className="text-center mt-4">{successMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;