import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      user_message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_9g975sf",
        "template_232gsyj",
        templateParams,
        "1dmtECDsd_Cqla7C9"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center pb-16 pt-7 text-gray-800">
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <h3 className="text-lg">Get in Touch with us easily</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Form */}
          <div className="lg:w-1/2 ">
            <form className="space-y-2" onSubmit={sendEmail}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full shadow-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full shadow-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full shadow-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 bg-[rgba(244,156,11,1)] text-white font-semibold py-3 rounded-lg hover:bg-orange-300 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Contact Info</h3>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[rgba(244,156,11,1)] text-2xl mt-1" />
                <p className="text-gray-700">
                  Office 204, Downtown Dubai, UAE
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[rgba(244,156,11,1)] text-2xl mt-1" />
                <a href="tel:+971 55 123 4567">
                  <p className="text-gray-700">+971 55 123 4567</p>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[rgba(244,156,11,1)] text-2xl mt-1" />
                <a href="mailto:info@tripsiy.com">
                  <p className="text-gray-700">info@tripsiy.com</p>
                </a>
              </div>

              <div className="flex items-start gap-4 text-lg font-semibold">
                <h1>Business Hours</h1>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-[rgba(244,156,11,1)] text-2xl mt-1" />
                <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 w-full h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="company-map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019183118301!2d-122.41941568468177!3d37.77492977975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c2a2f1df5%3A0x7c5a1a3f4b1d6c47!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1616077924664!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

