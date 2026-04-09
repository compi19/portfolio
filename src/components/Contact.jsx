import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'; // MessageSquare added
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xof47b9', 
      'template_qy3r38l', 
      form.current, 
      'lJRvqB5IseWDLuziS'
    )
    .then((result) => {
        alert("Message sent successfully! Thank you.");
        e.target.reset(); 
    }, (error) => {
        alert("An error occurred, please try again.");
    });
  };

  return (
    <section className="py-20 bg-gray-50 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">Let's Work Together!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800">Contact Details</h3>
            
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Mail size={24}/>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                <p className="text-gray-700 font-medium">melkamucom1130@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <Phone size={24}/>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Phone</p>
                <p className="text-gray-700 font-medium">+251 910651460</p>
                <p className="text-gray-700 font-medium">+251 918255510</p>
              </div>
            </div>

            {/* Telegram - Newly Added */}
            <div className="flex items-center gap-4">
              <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
                {/* Telegram SVG Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Telegram</p>
                <a href="https://t.me/MelkamuTech" target="_blank" rel="noreferrer" className="text-gray-700 font-medium hover:text-sky-600 transition-colors">
                  @MelkamuTech
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <MapPin size={24}/>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
                <p className="text-gray-700 font-medium">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700" placeholder="email@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-95">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;