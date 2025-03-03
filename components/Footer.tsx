import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kudan Local Government</h3>
            <p className="mb-4">
              Headquarters: Hunkuyi, Kaduna State
              <br />
              Nigeria
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300 transition-colors">
                  About Kudan
                </Link>
              </li>
              <li>
                <Link href="/government" className="hover:text-green-300 transition-colors">
                  Government
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-green-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/agriculture" className="hover:text-green-300 transition-colors">
                  Agriculture
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@kudanlga.gov.ng</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Hunkuyi, Kaduna State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Kudan Local Government Area. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;