import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/My-Logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Programs", href: "/programs" },
  { name: "Method", href: "/method" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActivityPage = location.pathname === "/activity";

  const handleClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      if (!isActivityPage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-7" />
            </Link>

            <Link to="/" className="text-2xl font-bold text-teal-600">
              Firman Seno Sudiro
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.name} to={item.href} className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={item.href} onClick={() => handleClick(item.href)} className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                  {item.name}
                </a>
              ),
            )}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.name} to={item.href} className="block py-3 text-gray-700 hover:text-teal-600 font-medium" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={item.href} onClick={() => handleClick(item.href)} className="block py-3 text-gray-700 hover:text-teal-600 font-medium">
                  {item.name}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
