'use client';

import { Button } from '@/components/ui/button';

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

const Hero = () => {
  const text = 'Hola, soy Imanol Galarza';

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-slideInFade"
            style={{ animationDelay: `${0.5 + index * 0.04}s` }}
          >
            {char === ' ' ? '\u00A0' : char} {}
          </span>
        ))}
      </h1>
      <p className="text-l sm:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn">
        Actualmente estoy centrado en convertirme en desarrollador full stack,
        aprendiendo nuevos lenguajes y especializándome en ellos.
      </p>
      <Button asChild>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          className="hover:text-primary animate-fadeIn"
        >
          Contacta conmigo
        </a>
      </Button>
    </section>
  );
};

export default Hero;
