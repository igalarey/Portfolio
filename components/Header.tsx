'use client';

import { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave
  const handleSmoothScroll = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Imanol Galarza
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="hover:text-primary"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="hover:text-primary"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hover:text-primary"
          >
            Contacto
          </a>
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="hover:text-primary"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="hover:text-primary"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hover:text-primary"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
