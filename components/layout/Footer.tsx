


import { Button } from "../common";
import Image from "next/image";

export  function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Blue Strip */}

      <div className="max-w-7xl mx-auto px-6 py-10 lg:flex space-y-10">
        {/* LOGO + CTA */}
        <div className="space-y-10 ps-4">
          <a href="#" className="px-2">
            <Image src="/images/navbar/nav-logo.svg" alt="Chat360 Logo" width={120} height={40} />
          </a>

          <Button text="Sign Up now" radius="rounded-4xl" />

          <div className="flex items-center gap-4 text-lg px-2">
          
            <Image src="/images/footer/Link-instagram.png" alt="Instagram" width={24} height={24} className="cursor-pointer" />
            
            <Image src="/images/footer/Link-facebook.png" alt="Facebook" width={24} height={24} className="cursor-pointer" />
          <Image src="/images/footer/Link-linkedin.png" alt="LinkedIn" width={24} height={24} className="cursor-pointer" />
            <Image src="/images/footer/Link-youtube.png" alt="Youtube" width={24} height={24} className="cursor-pointer" />
            
          </div>
        </div>

        <div className="sm:flex mx-auto lg:gap-10 gap-15 pt-5">
          {/* Company */}
          <div className="mb-3">
            <h4 className="text-blue-700 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-black ">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
          </div>

          {/* Product */}
          <div className="mb-3">
            <h4 className="text-blue-700 font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:underline">Features</li>
              <li className="cursor-pointer hover:underline">Integrations</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-3">
            <h4 className="text-blue-700 font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:underline">Knowledge Base</li>
              <li className="cursor-pointer hover:underline">
                Visitor Insights
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="mb-3">
            <h4 className="text-blue-700 font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:underline">
                Analytics & Dashboard
              </li>
              <li className="cursor-pointer hover:underline">Pricing</li>
            </ul>
          </div>

          {/* Support */}
          <div className="mb-3">
            <h4 className="text-blue-700 font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:underline">FAQ</li>
              <li className="cursor-pointer hover:underline">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-300" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-[0.4fr_1fr] text-xs text-gray-500 md:text-start text-center space-y-3">
        <p>Copyright © 2025 Chat360. All rights reserved.</p>
        <p>
          Hey there! We’re excited to have you here. Just a quick note—our
          website uses cookies to enhance your experience and our partners’ use
          of cookies for analytics, personalization, and improving our services.
          You can manage or revoke your consent anytime in your browser
          settings. Read our{" "}
          <span className="text-blue-600 cursor-pointer">Cookies Policy</span>.
        </p>
      </div>
    </footer>
  );
}
