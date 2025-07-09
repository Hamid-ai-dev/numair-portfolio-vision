
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-green-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-elegant text-xl md:text-2xl font-bold text-islamic-green-800 dark:text-islamic-green-400">
            Hafiz Muhammad Numair
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              About
            </Link>
            <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Education
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              About
            </Link>
            <Link to="/education" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Education
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
