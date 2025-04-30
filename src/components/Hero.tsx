
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 gradient-bg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Declaraciones al día <br />
              <span className="text-resico-red">con mucha alegría</span>
            </h1>
            <p className="text-lg mb-6 text-resico-dark-gray">
              Tus impuestos nunca estuvieron mejor cuidados. Plataforma especializada para jóvenes profesionales en el régimen RESICO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-resico-red hover:bg-opacity-90 text-lg py-6 px-8">
                Empieza Ahora
              </Button>
              <Button variant="outline" className="border-resico-light-gray text-resico-black hover:bg-resico-off-white text-lg py-6 px-8">
                Conocer Más
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="border-4 border-black p-3">
                  <span className="text-7xl md:text-8xl font-bold">I</span>
                </div>
              </div>
              <div className="absolute -bottom-4 right-4 md:right-8 bg-white shadow-lg rounded-lg p-4 max-w-xs">
                <p className="text-sm font-medium">
                  "ImpuestApp me ayudó a organizar mis impuestos y ahorrar tiempo y dinero" - Ana C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
