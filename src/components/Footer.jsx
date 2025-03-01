import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Make Monster</h3>
            <p className="text-gray-400">
              Transform your body and mind with our state-of-the-art facilities and expert trainers.
              Join us on your fitness journey today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-red-600">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-red-600">Classes</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-red-600">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-red-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">123 Fitness Street, Gym City</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">+91 9867432567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">ashutoshbhanawat9876@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Make Monster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;