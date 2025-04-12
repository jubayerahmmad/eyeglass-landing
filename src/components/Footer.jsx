import {
  FaFacebook,
  FaInstagram,
  FaLocationPin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="flex text-3xl font-bold items-center">
                try<span className="text-cyan-500">Now</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaLocationPin size={24} />
                <div>
                  <p>30 Buttonwood St.Pataskala</p>
                  <p>OH 43062</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone size={24} />
                <p>(+1)-613-333-0101</p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail size={24} />
                <p>admin@trynow.com</p>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Men's Eyeglasses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Women's Eyeglasses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Baby's Eyeglasses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Young Eyeglasses
                </a>
              </li>
            </ul>
          </div>

          {/* Admin Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Admin</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Try Now Eyeglasses Shop
          </p>

          {/* Payment Methods */}
          <div className="flex space-x-3">
            <div className="bg-white p-1 rounded">
              <img
                src="https://i.ibb.co.com/qFyYbG90/paypal.png"
                alt="PayPal"
                className="h-6"
              />
            </div>
            <div className="bg-white p-1 rounded">
              <img
                src="https://i.ibb.co.com/8L1TW3Dv/Stripe.png"
                alt="Stripe"
                className="h-6"
              />
            </div>
            <div className="bg-white p-1 rounded">
              <img
                src="https://i.ibb.co.com/C3qzXcV4/Apple-Pay-Logo-wine.png"
                alt="Apple Pay"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
