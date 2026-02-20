import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sdgs = [
    {
      number: 4,
      title: "Quality Education",
      color: "#C5192D",
      desc: "Digital literacy for youth",
    },
    {
      number: 5,
      title: "Gender Equality",
      color: "#FF3A21",
      desc: "Empowering women in STEM",
    },
    {
      number: 8,
      title: "Decent Work",
      color: "#A21942",
      desc: "Job creation through tech",
    },
    {
      number: 9,
      title: "Industry/Innovation",
      color: "#FD6925",
      desc: "Fostering local innovation",
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      color: "#DD1367",
      desc: "Inclusive tech access",
    },
    {
      number: 13,
      title: "Climate Action",
      color: "#3F7E44",
      desc: "Green tech solutions",
    },
    {
      number: 17,
      title: "Partnerships",
      color: "#19486A",
      desc: "Global collaboration",
    },
  ];

  return (
    <footer className="bg-fih-black text-fih-inclusive-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* SDG Tracker */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-fih-silver">
            Contributing to Sustainable Development Goals
          </h3>
          <div className="flex flex-wrapjustify-center gap-4 justify-center">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="group relative flex flex-col items-center p-2 transition-transform hover:-translate-y-2 cursor-pointer w-24"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center font-bold text-2xl text-white shadow-lg mb-2 z-10 relative overflow-hidden"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span className="z-10">{sdg.number}</span>
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-white/10 backdrop-blur-md p-3 rounded-lg text-center pointer-events-none transition-opacity z-20 shadow-xl border border-white/10">
                  <p
                    className="text-xs font-bold text-white mb-1"
                    style={{ color: sdg.color }}
                  >
                    {sdg.title}
                  </p>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-fih-hub-blue rounded-full flex items-center justify-center font-bold text-white text-xs">
                FH
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                FAIDHAA <span className="text-fih-hub-blue">HUB</span>
              </span>
            </Link>
            <p className="text-fih-silver text-sm leading-relaxed mb-6">
              Bridging Technology, Innovation, and Inclusive Economic
              Empowerment in Nigeria.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/5 p-2 rounded-full hover:bg-fih-hub-blue hover:text-white transition-colors text-fih-silver"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-2 rounded-full hover:bg-fih-hub-blue hover:text-white transition-colors text-fih-silver"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-2 rounded-full hover:bg-fih-hub-blue hover:text-white transition-colors text-fih-silver"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white/5 p-2 rounded-full hover:bg-fih-hub-blue hover:text-white transition-colors text-fih-silver"
              >
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-fih-silver hover:text-fih-hub-blue text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-fih-silver text-sm">Lagos, Nigeria</li>
              <li className="text-fih-silver text-sm">
                faidhaainnovationshub@gmail.com
              </li>
              <li className="text-fih-silver text-sm">07018758273</li>
              <li className="text-fih-silver text-sm">
                08184031178 (WhatsApp)
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-fih-silver text-xs">
            &copy; {currentYear} Faidhaa Innovation Hub. All rights reserved.
          </p>
          <p className="text-fih-silver text-xs">
            Built with <span className="text-red-500">♥</span> for Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
