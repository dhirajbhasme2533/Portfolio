import React, { useState } from "react";
import { BarLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE, 
        import.meta.env.VITE_EMAILJS_TEMPLATE, 
        formData, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setAlert(null);
    } catch (err) {
      console.error(err);
      setAlert(err.text);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full h-fit z-10 bg-white p-5 lg:p-[21px] rounded-xl font-sans text-black">
      <div className="grid grid-cols-2 gap-5 w-full h-fit">
        <div className="col-span-2 lg:col-span-1">
          <div className="text-sm text-start font-sans my-2">First Name:</div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="bg-[#f0f0f0] rounded-lg w-full px-3 py-2 lg:p-3"
            required
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="text-sm text-start font-sans my-2">Last Name:</div>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="bg-[#f0f0f0] rounded-lg w-full px-3 py-2 lg:p-3"
            required
          />
        </div>
        <div className="col-span-2">
          <div className="text-sm text-start font-sans my-2">Email:</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#f0f0f0] rounded-lg w-full px-3 py-2 lg:p-3"
            required
          />
        </div>
        <div className="col-span-2">
          <div className="text-sm text-start font-sans my-2">Message:</div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-[#f0f0f0] rounded-lg w-full px-3 py-2 lg:p-3"
            required
          />
        </div>

        <div className="col-span-1">
          {alert && (
            <div className="text-lg text-red-500 w-full mb-3">
              <p>{alert}</p>
            </div>
          )}


          <button
            type="submit"
            className={`font-sans text-white w-full p-3 rounded-lg ${alert ? 'bg-red-400' : 'bg-black'}`}
            disabled={loading}
          >
            {alert ? 'Send again' : 'Send'}
          </button>
        </div>
        <div className="col-span-1 flex justify-center items-center h-full">
            {loading && (
              <BarLoader
                color={"#000"}
                loading={loading}
                width={100}
                speedMultiplier={3}
              />
            )}
        </div>

        {/* Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-gray-700 mb-4">Your message has been sent successfully. 🙌🏻</p>
            <button onClick={closeModal} className="px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-slate-800">
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </form>
  );
}

export default ContactForm;
