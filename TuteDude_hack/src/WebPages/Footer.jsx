// Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-blue-400 text-gray-200 mt-10">
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="space-y-4">
        <img src="https://img.freepik.com/premium-vector/bazaar-portable-store-logo-design-template_529200-416.jpg" alt="Brand Logo" className="h-12"/>
        <p className="text-gray-300">Ultra‑fast grocery delivery in minutes.</p>
      </div>
      <div>
        <h4 className="uppercase font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:text-white">About us</a></li>
          <li><a href="/careers" className="hover:text-white">Careers</a></li>
          <li><a href="/blog" className="hover:text-white">Blog</a></li>
          <li><a href="/press" className="hover:text-white">Press</a></li>
        </ul>
      </div>
      <div>
        <h4 className="uppercase font-semibold mb-4">Support</h4>
        <ul className="space-y-2">
          <li><a href="/help" className="hover:text-white">Help Center</a></li>
          <li><a href="/contact" className="hover:text-white">Contact us</a></li>
          <li><a href="/faq" className="hover:text-white">FAQs</a></li>
          <li><a href="/terms" className="hover:text-white">Terms & Privacy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="uppercase font-semibold mb-4">Follow us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><svg className="h-6 w-6" fill="currentColor">...</svg></a>
          <a href="#" className="hover:text-white"><svg className="h-6 w-6" fill="currentColor">...</svg></a>
          <a href="#" className="hover:text-white"><svg className="h-6 w-6" fill="currentColor">...</svg></a>
        </div>
      </div>
    </div>
    <div className="border-t border-purple-700 mt-8 pt-6 pb-4 text-center text-gray-800 text-sm">
      <p>© 2025 YourBrand. All rights reserved.</p>
      <p className="mt-1">Built for speed, trust & sustainability.</p>
    </div>
  </footer>
);

export default Footer;
