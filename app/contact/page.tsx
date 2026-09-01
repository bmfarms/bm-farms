'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwFIVdV10RK5YvC8acR0a6Ia0or8qRzec2QjOMic_LHIp0Q26PJCn_c3opVo-8cQrQByg/exec';

try {
  const response = await fetch(scriptUrl, {
    method: 'POST',
    mode: 'cors', // ✅ Changed from 'no-cors' to 'cors'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully. Our team will get back to you shortly.' });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  } else {
    throw new Error('Server error');
  }
} catch (error) {
  console.error(error); // ✅ error ko console mein log karein
  setStatusMessage({ type: 'error', text: 'Message submission failed. Please try again or contact us directly via phone or email.' });
} finally {
  setLoading(false);
}}

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-hidden">
      <div>

        {/* Dynamic Header */}
        <section className="relative bg-gradient-to-r from-green-950 via-emerald-900 to-green-900 text-white py-20 px-4 sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 border border-emerald-500/30">
              Reach Out To Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Get in touch with BM Farms & Services. We are here to answer your inquiries and discuss potential partnerships.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Have questions about our feeds, farming operations, packaging, or energy solutions? Reach out to us directly or fill out the form.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Head Office</h3>
                    <p className="text-gray-600 text-sm mt-0.5">BM Farms & Services Pvt Ltd, Punjab, Pakistan</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm mt-0.5">+92 300 0000000</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Address</h3>
                    <p className="text-gray-600 text-sm mt-0.5">info@bmfarms.pk</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>

              {statusMessage && (
                <div
                  className={`p-4 mb-6 rounded-xl text-sm font-semibold flex items-center gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition text-gray-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition text-gray-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition text-gray-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition text-gray-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none text-sm transition resize-none text-gray-900 bg-gray-50/50 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </section>
      </div>
    </main>
  );
}