"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://saas_web.yenechinet.com/api/portal-interactions/create-contact-us",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "0e25d5df-8efb-441b-94e4-674aa60e25d1",
          },
        }
      );
      setResponseMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        subject: "",
      });
    } catch (error) {
      setResponseMessage(
        "There was an error sending your message. Please try again."
      );
    }
  };

  return (
    <div
      id="contact-us"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-8 lg:p-12"
    >
      <div className="contact-us-card w-full p-5 shadow-lg bg-gradient-to-br from-slate-100 to-emerald-400 rounded-md">
        <h2 className="mb-5 text-neutral-950 text-center font-serif text-2xl sm:text-3xl">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-rows-2 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Name" className="text-neutral-950 block mb-1">
              Name
            </label>

            <input
              title="name"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="text-neutral-950 block mb-1" htmlFor="email">
              Email:
            </label>
            <input
              className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="text-neutral-950 block mb-1" htmlFor="phone">
              Phone:
            </label>
            <input
              className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="text-neutral-950 block mb-1" htmlFor="subject">
              Subject:
            </label>
            <input
              className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your subject"
            />
          </div>
          <div className="col-span-12 sm:col-span-3">
            <label className="text-neutral-950 block mb-1" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full p-3 mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-8 py-2 text-base font-bold leading-6 text-white bg-amber-600 border border-transparent rounded-full md:w-auto hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
            >
              Submit
            </button>
          </div>
        </form>
        {responseMessage && (
          <p className="text-center mt-5 text-neutral-950">{responseMessage}</p>
        )}
      </div>
      <div className="rounded-md w-full h-64 sm:h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.7582415180623!2d38.7475927!3d8.995787199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b878f130a7ff3%3A0x5292a34585d9704b!2sY%20M%20TRADING%20PLC!5e1!3m2!1sen!2set!4v1724653425961!5m2!1sen!2set"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
