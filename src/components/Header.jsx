"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useContactModal } from "../context/ContactModalContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-1">
              <Image
                src="/images/logo/ancile_company_name_logo_orange_color_transparant.svg"
                alt="Ancile AI Logo"
                width={156}
                height={32}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-burnt-orange-600 font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-burnt-orange-600 before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </Link>
            <button
              onClick={openModal}
              className="bg-burnt-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-burnt-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Partner With Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-700 focus:outline-none p-2 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-burnt-orange-600 font-medium transition-all duration-200 px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              About
            </Link>
            <button
              onClick={openModal}
              className="w-full bg-burnt-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-burnt-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </button>
          </div>
        )}
      </div>


    </header>
  );
};

export default Header;
