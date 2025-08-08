import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import h1 from '../images/1d43bf935f386047db9c892e601491b4.jpg';
import smoke from '../images/smoke.gif'; 
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'; 

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - express';
  }, []);

  const contacts = [
    {
      role: 'Chairperson',
      name: 'Aniket Prasad',
      phone: '+91 96533 44645',
      icon: User,
    },
    {
      role: 'Vice Chairperson',
      name: 'Kevin Savla',
      phone: '+91 70212 88189',
      icon: User,
    },
    {
      role: 'Vice Chairperson',
      name: 'Kriish Chheda',
      phone: '+91 91671 60832',
      icon: User,
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden text-[#f0f0e0] font-serif"
      style={{
        backgroundImage: `url(${h1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Smoke animation */}
      <img
        src={smoke}
        alt="Smoke effect"
        className="fixed inset-0 w-full h-full z-20 mix-blend-screen pointer-events-none animate-fadeout"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-yellow-400">
            Contact Us
          </h1>
        </div>

        <hr className="border border-yellow-400/40 mx-auto w-full mb-12" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Address & Quick Contact */}
          <div className="space-y-6">
            <div className="rounded-lg p-6 border border-yellow-500/20 bg-[#2a2a2a] shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 active:-translate-y-2 active:shadow-yellow-400/30 focus:-translate-y-2 focus:shadow-yellow-400/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-yellow-500/10">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#e0c870]">Visit Us</h3>
                  <address className="not-italic leading-relaxed text-[#cccccc] text-sm">
                    DJ Sanghvi College of Engineering<br />
                    Plot No. U-15, Juhu Versova Link Road<br />
                    Vile Parle (West), Mumbai - 400056<br />
                    Maharashtra, India
                  </address>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 text-center border border-yellow-500/20 bg-[#2a2a2a] shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 active:-translate-y-2 active:shadow-yellow-400/30 focus:-translate-y-2 focus:shadow-yellow-400/30">
              <div className="p-3 rounded-full inline-block mb-4 bg-yellow-500/10">
                <Mail className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#e0c870]">Quick Contact</h3>
              <p className="text-[#cccccc] text-sm">
                For immediate queries, reach out to our team leads directly.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Our Team</h2>
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg p-6 border border-yellow-500/20 bg-[#2a2a2a] shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 active:-translate-y-2 active:shadow-yellow-400/30 focus:-translate-y-2 focus:shadow-yellow-400/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-yellow-500/10">
                        <Icon className="text-yellow-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-[#e0c870]">{contact.role}</h4>
                        <p className="text-[#cccccc]">{contact.name}</p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-2 mt-2 text-sm font-medium text-yellow-400"
                        >
                          <Phone size={14} />
                          <span>{contact.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map Section */}
          <div className="h-full">
            <div className="rounded-lg p-6 h-full border border-yellow-500/20 bg-[#2a2a2a] shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 active:-translate-y-2 active:shadow-yellow-400/30 focus:-translate-y-2 focus:shadow-yellow-400/30">
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-400">Find Us</h3>
              <div className="w-full h-80 xl:h-96 rounded-xl overflow-hidden border border-yellow-500/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0123456789!2d72.8261!3d19.1058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9578066a8d7%3A0x6de440c1d2c9a0c4!2sDJ%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123&markers=color:red%7Clabel:E%7C19.1058,72.8261"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DJ Sanghvi College of Engineering Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeout {
            0%, 80% { opacity: 1; }
            100% { opacity: 0; pointer-events: none; }
          }
          .animate-fadeout {
            animation: fadeout 1s forwards;
          }
        `}
      </style>
          <ScrollToTopButton />

    </section>
  );
};

export default Contact;
