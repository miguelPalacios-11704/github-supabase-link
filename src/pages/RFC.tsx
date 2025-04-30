
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RFC: React.FC = () => {
  const { toast } = useToast();
  const [rfc, setRfc] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡RFC registrado correctamente!",
      description: "Gracias por proporcionar tu información fiscal.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              ¡Casi has terminado!
            </h2>
            <p className="text-resico-medium-gray mb-6 text-center">
              Por favor, proporciona tu RFC para continuar con tu registro
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="rfc" className="block text-sm font-medium text-resico-dark-gray mb-1">
                  RFC (Registro Federal de Contribuyentes)
                </label>
                <Input 
                  id="rfc"
                  type="text"
                  placeholder="Ej. XAXX010101000"
                  value={rfc}
                  onChange={(e) => setRfc(e.target.value)}
                  required
                  className="w-full"
                />
                <p className="text-sm text-resico-medium-gray mt-1">
                  Sin guiones ni espacios
                </p>
              </div>
              
              <Button type="submit" className="w-full bg-resico-red hover:bg-opacity-90 py-6">
                Continuar
              </Button>
            </form>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RFC;
