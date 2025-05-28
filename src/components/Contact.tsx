
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-slate-300 text-lg">Let's connect and explore opportunities together</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:abhay20233008@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                      abhay20233008@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a href="tel:+918318656396" className="text-white hover:text-blue-400 transition-colors duration-300">
                      +91-8318656396
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">MNNIT Allahabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/abhaysachan01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-lg text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abhaysachan01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-lg text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Student Information */}
        {/* <div className="mt-16 text-center">
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-white mb-2">Student Information</h4>
            <p className="text-slate-300">Reg No.: 20233008</p>
            <p className="text-slate-300">MNNIT Allahabad</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
