import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import h1 from '../images/1d43bf935f386047db9c892e601491b4.jpg';

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
      className="relative z-10 px-4 py-20 md:py-28 min-h-screen text-white"
      style={{
        backgroundImage: `url(${h1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F0D17',
      }}
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-playfair" style={{ color: '#FFD700' }}>
          Contact Us
        </h1>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Visit & Quick Contact */}
        <div className="space-y-6">
          <div
            className="rounded-2xl p-6 hover:shadow-lg transition-all duration-500 group"
            style={{
              backgroundColor: '#1E1B16',
              border: '1px solid #8B5E3C66',
              boxShadow: '0 0 0 rgba(0,0,0,0)',
            }}
          >
            <div className="flex items-start space-x-4">
              <div
                className="p-3 rounded-full transition-colors"
                style={{ backgroundColor: '#8B5E3C1A' }}
              >
                <MapPin style={{ color: '#FFD700' }} size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#8B5E3C' }}>
                  Visit Us
                </h3>
                <address className="not-italic leading-relaxed" style={{ color: '#D1D1D1' }}>
                  DJ Sanghvi College of Engineering<br />
                  Plot No. U-15, Juhu Versova Link Road<br />
                  Vile Parle (West), Mumbai - 400056<br />
                  Maharashtra, India
                </address>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-center group transition-all duration-500"
            style={{ backgroundColor: '#1E1B16', border: '1px solid #8B5E3C66' }}
          >
            <div
              className="p-3 rounded-full inline-block mb-4"
              style={{ backgroundColor: '#8B5E3C1A' }}
            >
              <Mail style={{ color: '#FFD700' }} size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#8B5E3C' }}>
              Quick Contact
            </h3>
            <p style={{ color: '#D1D1D1' }}>
              For immediate queries, reach out to our team leads directly.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFD700' }}>
            Our Team
          </h2>
          <div className="space-y-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 transition-all duration-500 group"
                  style={{
                    backgroundColor: '#1E1B16',
                    border: '1px solid #8B5E3C66',
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: '#8B5E3C1A' }}
                    >
                      <Icon style={{ color: '#FFD700' }} size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg" style={{ color: '#8B5E3C' }}>
                        {contact.role}
                      </h4>
                      <p style={{ color: '#D1D1D1' }}>{contact.name}</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="flex items-center space-x-2 mt-2 text-sm font-medium"
                        style={{ color: '#FFD700' }}
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
          <div
            className="rounded-2xl p-6 h-full group transition-all duration-500"
            style={{ backgroundColor: '#1E1B16', border: '1px solid #8B5E3C66' }}
          >
            <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#FFD700' }}>
              Find Us
            </h3>
            <div
              className="w-full h-80 xl:h-96 rounded-xl overflow-hidden"
              style={{ border: '1px solid #8B5E3C33' }}
            >
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
    </section>
  );
};

export default Contact;
