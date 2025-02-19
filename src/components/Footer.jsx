import { Facebook, Instagram, Twitter } from 'lucide-react'
import logo from '../assets/images/footer-logo.png'
function Footer() {
  return (
    <footer className="text-white text-center py-6 mt-10">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <Facebook className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <Twitter className="w-6 h-6 text-white" />
        </a>
      </div>

    {/* Logo */}
    <div className="flex justify-center mb-4">
      <img src={logo} alt="Logo" className="w-7 h-7" />
    </div>

    {/* Copyright Text */}
    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mellifera Honey. All rights reserved.</p>
  </footer>
  )
}

export default Footer