import React, { useState } from "react";
import { Footer, NavBar } from "../components";

const ContactPage = () => {
  const [successMessage, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");

    const form = e.target;
    const formData = new FormData(form);

    // Append access key for email submission
    formData.append("access_key", "cd8391e9-ca2a-49f8-8724-f8c41ba0c1f0");

    try {
      // Submit to Web3Forms for email
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const emailData = await emailResponse.json();

      // Check response from Web3Forms
      if (emailData.success) {
        // Submit to Google Sheets
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyUZVI4q5QOq522FZObtwrd6atYJyr6p7IrPOnY--14HO50gqlI7mqAYz6LKo5sd4l2yQ/exec';
        const googleFormData = new FormData(form); // Use a new FormData object for Google Sheets

        const googleResponse = await fetch(scriptURL, {
          method: 'POST',
          body: googleFormData
        });

        if (googleResponse.ok) {
          setMessage("Message sent successfully!");
          setTimeout(() => {
            setMessage("");
          }, 5000);
          form.reset();
        } else {
          setMessage("Message not sent, try again later.");
          throw new Error("Failed to submit to Google Sheets");
        }
      } else {
        throw new Error(emailData.message);
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage(`Error: ${error.message}`);
    }
  };
  

  return (
    <div className="bg-[#0C0C0C] px-2 md:px-14 lg:px-[12%] h-[100%]">
      <NavBar />
      <div className="flex flex-col justify-top items-center h-auto w-full mt-[10%] mb-[5%]">
        <h1 className="text-white text-4xl">Leave us a message!</h1>
        <p className="text-white mb-8">We'll reach back to you.</p>

        <form className="rounded px-8 pt-4 md:pb-4 mb-4 w-[450px] pb-10" onSubmit={handleSubmit}>
          <div className="mb-4 text-white">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4 text-white">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6 text-white">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white"
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className="bg-white hover:bg-transparent text-black hover:text-white hover:border hover:border-w-1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Send
            </button>
            <p className="text-white mt-4 text-center">{successMessage}</p>
          </div>
        </form>
      </div>
      <Footer bg={"black"}/>
    </div>
  );
};

export default ContactPage;
