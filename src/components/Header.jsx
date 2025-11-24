import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // ---------- FIX: Get current route ----------
  const location = useLocation();
  const currentPath = location.pathname;

  // Close search when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      // Check if click is outside of both mobile menu and mobile menu button
      if (
        mobileOpen &&
        menuRef.current && 
        !menuRef.current.contains(e.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // ---------- Active link style ----------
  const linkClass = (path) =>
    currentPath === path
      ? "text-[rgba(244,156,11,1)] font-semibold"
      : "text-gray-700 hover:text-[#F49C0B]";

  return (
    <header className="w-full bg-white px-4 md:px-8 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className=" md:h-[90px] h-[70px] w-[90px] md:w-[160px] object-contain" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-x-6 font-medium text-[16px] font-poppins">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/about" className={linkClass("/about")}>About</Link>
          <Link to="/destination" className={linkClass("/destination")}>Destination</Link>
          <Link to="/packages" className={linkClass("/packages")}>Packages</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div ref={searchRef} className="relative hidden md:block">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              className="p-2 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                strokeWidth="1.5" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>

            <div
              className={`absolute right-0 top-0 transition-all duration-300 ${
                searchOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
              }`}
              style={{ minWidth: 160 }}
            >
              <input
                autoFocus={searchOpen}
                className="w-64 md:w-72 lg:w-56 rounded-full border px-4 py-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Search"
              />
            </div>
          </div>

          {/* BOOK NOW */}
          <Link to='/packages' className="hidden sm:inline-block bg-[rgba(244,156,11,1)] hover:bg-[rgba(213,198,159,1)]
            text-white px-4 py-2 rounded-full transition">
            Book Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            ref={mobileMenuButtonRef}
            className="lg:hidden p-2 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300"
            onClick={() => setMobileOpen((s) => !s)}
          >
            {mobileOpen ? (
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        ref={menuRef}
        className={`lg:hidden mt-2 transition-max-height duration-300 overflow-hidden ${
          mobileOpen ? "max-h-90" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 pb-4 font-medium">

          <Link to="/" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/")}`}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/about")}`}>About</Link>
          <Link to="/destination" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/destination")}`}>Destination</Link>
          <Link to="/packages" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/packages")}`}>Packages</Link>
          <Link to="/services" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/services")}`}>Services</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className={`py-2 border-b ${linkClass("/contact")}`}>Contact</Link>

          <div className="pt-2">
            <Link to='/packages' className="w-full bg-[rgba(244,156,11,1)] text-white px-4 py-2 rounded-full">
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}