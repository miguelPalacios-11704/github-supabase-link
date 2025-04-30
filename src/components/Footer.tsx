
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 text-gray-400">
              Declaraciones al día con mucha alegría. La plataforma fiscal para jóvenes profesionales en régimen RESICO.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="#que-hacemos" className="text-gray-400 hover:text-white transition-colors">¿Qué hacemos?</Link></li>
              <li><Link to="#planes" className="text-gray-400 hover:text-white transition-colors">Planes</Link></li>
              <li><Link to="#seguridad" className="text-gray-400 hover:text-white transition-colors">Seguridad</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Iniciar Sesión</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/cursos" className="text-gray-400 hover:text-white transition-colors">Cursos</Link></li>
              <li><Link to="/preguntas-frecuentes" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/glosario-fiscal" className="text-gray-400 hover:text-white transition-colors">Glosario Fiscal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">contacto@impuestapp.mx</li>
              <li className="text-gray-400">+52 55 1234 5678</li>
              <li className="text-gray-400">Ciudad de México, México</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ImpuestApp. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4">
            <Link to="/privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</Link>
            <Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
