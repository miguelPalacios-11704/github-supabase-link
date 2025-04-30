
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#que-hacemos" className="text-resico-black hover:text-resico-red transition-colors">
              ¿Qué hacemos?
            </Link>
            <Link to="#planes" className="text-resico-black hover:text-resico-red transition-colors">
              Planes
            </Link>
            <Link to="#seguridad" className="text-resico-black hover:text-resico-red transition-colors">
              Seguridad
            </Link>
            <Link to="#contacto" className="text-resico-black hover:text-resico-red transition-colors">
              Contacto
            </Link>
            <Button className="bg-resico-red hover:bg-opacity-90">Regístrate</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="#que-hacemos" className="text-resico-black hover:text-resico-red transition-colors py-2">
                ¿Qué hacemos?
              </Link>
              <Link to="#planes" className="text-resico-black hover:text-resico-red transition-colors py-2">
                Planes
              </Link>
              <Link to="#seguridad" className="text-resico-black hover:text-resico-red transition-colors py-2">
                Seguridad
              </Link>
              <Link to="#contacto" className="text-resico-black hover:text-resico-red transition-colors py-2">
                Contacto
              </Link>
              <Button className="bg-resico-red hover:bg-opacity-90 w-full">Regístrate</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
