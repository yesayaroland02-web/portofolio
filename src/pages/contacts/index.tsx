import React, { useState } from 'react';
import { useDark } from "../../context/Dark-Context";

export default function ContactSection() {
  const { isDark } = useDark();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingMessages = JSON.parse(
      localStorage.getItem('contact_messages') || '[]'
    );

    const newMessage = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const updatedMessages = [...existingMessages, newMessage];

    localStorage.setItem('contact_messages', JSON.stringify(updatedMessages));

    alert('Pesan berhasil dikirim!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={`w-full py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p
            className={`mt-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Information & Social Links */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p
                className={`mt-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Silakan hubungi saya melalui email, telepon, atau media sosial berikut:
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:yesayaroland02@gmail.com"
                    className="text-lg font-medium text-blue-500 hover:underline"
                  >
                    yesayaroland02@gmail.com
                  </a>
                </div>

                <div>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Phone / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6282385893500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-500 hover:underline"
                  >
                    +62 823-8589-3500
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-md font-semibold">Social Media</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/yesaya-roland-steven-51286b335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yesayaroland02-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isDark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com/yesayaroland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-700"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-xl p-6 shadow-lg sm:p-8 border transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`mt-1 w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`mt-1 w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`mt-1 w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? 'bg-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}