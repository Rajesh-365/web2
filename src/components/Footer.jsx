import React from 'react';
import { MessageCircle, Mail, Youtube, Facebook, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/918686284462',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    {
      icon: Mail,
      href: 'mailto:eit.jgf2018@gmail.com',
      label: 'Email',
      color: 'hover:text-blue-500'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@emmaustv-jgf?si=_aciymMKy5WF_YWY',
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Emmaus Institute</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Training disciples and spreading the Gospel since 2018. Equipping believers for ministry in unreached areas across India.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white/20 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-400" />
                Connect With Us
              </h3>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Primary Contact */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-blue-200">Admissions In-Charge</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold">Rev. N. Abraham</p>
                          <a 
                            href="tel:+918686284462" 
                            className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
                          >
                            +91 86862 84462
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-purple-400" />
                        </div>
                        <a 
                          href="mailto:eit.jgf2018@gmail.com"
                          className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
                        >
                          eit.jgf2018@gmail.com
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-green-400" />
                        </div>
                        <a 
                          href="https://maps.app.goo.gl/EudEDYsEDYyzoMAM7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:text-green-200 transition-colors duration-300"
                        >
                          Guntur, Andhra Pradesh, India
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-purple-200">Quick Links</h4>
                    <div className="space-y-2">
                      {[
                        { label: 'About Us', href: '#about' },
                        { label: 'Courses', href: '#courses' },
                        { label: 'Apply Now', href: '#admission' },
                        { label: 'Churches', href: '#churches' }
                      ].map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Emmaus Institute of Theology. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Built with ❤️ for spreading the Gospel
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;