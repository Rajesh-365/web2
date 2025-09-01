import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  Youtube, 
  Facebook, 
  Instagram,   // <-- added Instagram icon
  Phone, 
  MapPin, 
  GraduationCap, 
  ChevronRight, 
  User 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://api.whatsapp.com/send?phone=917981724802&text=Hello%20Emmaus%20Institute%2C%20I%27d%20like%20to%20know%20more%20about%20admissions.',
      label: 'WhatsApp',
      color: 'hover:text-green-400'
    },
    {
      icon: Mail,
      href: 'mailto:eit.jgf2018@gmail.com',
      label: 'Email',
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@emmaustv-jgf?si=_aciymMKy5WF_YWY',
      label: 'YouTube',
      color: 'hover:text-red-400'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61578149010762',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/emmausinstituteoftheology/',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Apply Now', href: '#admission' },
    { label: 'Churches', href: '#churches' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-8 left-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-8 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Main */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Brand (with logo.png) */}
            <div className="animate-fade-in-up">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="src/images/logo2.png"
                  alt="Emmaus Institute of Theology logo"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold leading-none">Emmaus Institute of Theology</h3>
              </div>

              <p className="mb-5 max-w-md text-gray-300/90 leading-relaxed text-sm">
                Training disciples and spreading the Gospel since 2018. Equipping believers for ministry in unreached areas across India.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/20 ${social.color}`}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact + Quick Links */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <Phone className="h-5 w-5 text-blue-400" />
                Connect With Us
              </h3>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-lg">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Left: Contact info */}
                  <div>
                    {/* Person header */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="animate-pulse-glow flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-blue-200 leading-tight">K. Mohan Prabhakar</h4>
                        <p className="text-xs text-gray-300">Admissions In-Charge</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="group flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20 transition group-hover:bg-green-500/30">
                        <MessageCircle className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">WhatsApp</p>
                        <a
                          href="https://api.whatsapp.com/send?phone=917981724802&text=Hello%20Emmaus%20Institute%2C%20I%27d%20like%20to%20know%20more%20about%20admissions."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-green-300 hover:text-green-200 transition-colors"
                        >
                          +91 79817 24802
                        </a>
                      </div>
                    </div>

                    {/* Call */}
                    <div className="group mt-4 flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 transition group-hover:bg-blue-500/30">
                        <Phone className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">Call</p>
                        <a href="tel:+919710936669" className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
                          +91 97109 36669
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group mt-4 flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '280ms' }}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/20 transition group-hover:bg-purple-500/30">
                        <Mail className="h-4 w-4 text-purple-400" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">Email</p>
                        <a href="mailto:eit.jgf2018@gmail.com" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
                          eit.jgf2018@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="group mt-4 flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '340ms' }}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20 transition group-hover:bg-green-500/30">
                        <MapPin className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold">Address</p>
                        <a
                          href="https://maps.app.goo.gl/EudEDYsEDYyzoMAM7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-green-300 hover:text-green-200 transition-colors"
                        >
                          Guntur, Andhra Pradesh, India
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Quick Links */}
                  <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '180ms' }}>
                    <h4 className="mb-3 text-base font-bold text-purple-200">Quick Links</h4>
                    <div className="space-y-1.5">
                      {quickLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
                          <span className="transition-transform group-hover:translate-x-0.5">{link.label}</span>
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
          <div className="container mx-auto px-4 py-5">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2024 Emmaus Institute of Theology. All rights reserved.</p>
              <p className="mt-1">Built with ❤️ for spreading the Gospel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease forwards; }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 16px 5px rgba(139, 92, 246, 0.5); }
        }
        .animate-pulse-glow { animation: pulseGlow 2.5s infinite ease-in-out; }
      `}</style>
    </footer>
  );
};

export default Footer;
