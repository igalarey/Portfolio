'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log({ name, email, message });
    toast({
      title: 'Mensaje enviado',
      description: 'Gracias por tu mensaje. Responderé lo antes posible.',
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Enviar mensaje
        </Button>
      </form>
    </section>
  );
};

export default Contact;
