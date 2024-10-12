import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        Hola, soy Imanol Galarza
      </h1>
      <p className="text-l sm:text-2xl mb-8 max-w-2xl mx-auto">
        Actualmente estoy centrado en convertirme en desarrollador full stack,
        aprendiendo nuevos lenguajes y especializandome en ellos.
      </p>
      <Button asChild>
        <a href="#contact">Contacta conmigo</a>
      </Button>
    </section>
  );
};

export default Hero;
