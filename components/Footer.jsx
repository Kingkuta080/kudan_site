"use client";
// good !
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";
import Logo from "@/public/logo.png";

// Data for reusable sections
const contactDetails = [
  { icon: <Phone size={16} />, text: "+234 7011 404 040" },
  { icon: <Mail size={16} />, text: "kudanlg@gmail.com" },
  { icon: <MapPin size={16} />, text: "Secretariat, Zaria Road, Hunkuyi" },
];

const socialMediaLinks = [
  { name: "Facebook", href: "https://www.facebook.com/kudanlg/", icon: <Facebook size={20} /> },
  { name: "Twitter", href: "https://x.com/Kudan_LG", icon: <Twitter size={20} /> },
  { name: "Instagram", href: "https://www.instagram.com/kudan_lg/", icon: <Instagram size={20} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/kudan-lga/posts/?feedView=all", icon: <Linkedin size={20} /> },
  { name: "YouTube", href: "https://www.youtube.com/@KudanLG", icon: <Youtube size={20} /> },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Kudan", href: "/about-kudan" },
  { label: "Government", href: "/government" },
  { label: "Projects", href: "/projects" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "News & Events", href: "/news-events" },
];

// Reusable components
const SectionHeader = ({ title }) => (
  <h3 className="text-xl font-bold mb-4">{title}</h3>
);

const ContactSection = () => (
  <div>
    <SectionHeader title="Contact Us" />
    <ul className="space-y-2">
      {contactDetails.map((detail, index) => (
        <li key={index} className="flex items-center">
          {detail.icon}
          <span className="ml-2">{detail.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SocialMediaSection = () => (
  <div>
    <SectionHeader title="Follow Us" />
    <div className="flex flex-col space-y-3">
      {socialMediaLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="hover:text-green-300 transition-colors flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
          <span>{social.name}</span>
        </Link>
      ))}
    </div>
  </div>
);

const QuickLinksSection = () => (
  <div>
    <SectionHeader title="Quick Links" />
    <ul className="space-y-2">
      {quickLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-green-300 transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src={Logo}
              alt="Kudan LGA Logo"
              width={70}
              height={70}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              Headquarters: Secretariat, Zaria Road, Hunkuyi
              <br />
              Kaduna State, Nigeria
            </p>
          </div>

          {/* Contact Section */}
          <ContactSection />

          {/* Social Media Section */}
          <SocialMediaSection />

          {/* Quick Links Section */}
          <QuickLinksSection />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kudan Local Government Area. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;