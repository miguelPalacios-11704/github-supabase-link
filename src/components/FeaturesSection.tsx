
import React from 'react';
import { FileText, MessageSquare, BookOpen, User } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="que-hacemos" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Qué Hacemos por Ti?</h2>
          <p className="text-lg text-resico-medium-gray max-w-2xl mx-auto">
            Somos especialistas en el régimen RESICO y te ofrecemos soluciones completas para que te enfoques en lo que haces mejor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <FileText size={28} className="text-resico-red" />
            </div>
            <h3 className="section-subtitle">Declaración de Impuestos Guiada</h3>
            <ul className="space-y-3">
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Flujo inteligente para declaraciones mensuales y anuales RESICO.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Importación automática de CFDI desde el SAT.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Validación de deducciones aplicables al régimen RESICO.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare size={28} className="text-resico-red" />
            </div>
            <h3 className="section-subtitle">Atención Personalizada</h3>
            <ul className="space-y-3">
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Chat en vivo para resolver dudas en menos de 24 horas.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Opción de videollamada con asesores fiscales especializados.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Chatbot con IA entrenado en temas fiscales mexicanos.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen size={28} className="text-resico-red" />
            </div>
            <h3 className="section-subtitle">Centro de Capacitación</h3>
            <ul className="space-y-3">
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Cursos cortos sobre declaración mensual y anual RESICO.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Guías sobre gastos deducibles y facturación correcta.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Certificación automática al terminar los cursos.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <User size={28} className="text-resico-red" />
            </div>
            <h3 className="section-subtitle">Panel de Usuario</h3>
            <ul className="space-y-3">
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Historial completo de declaraciones y facturas.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Seguimiento de cursos completados.</span>
              </li>
              <li className="feature-item">
                <div className="w-2 h-2 bg-resico-red rounded-full"></div>
                <span>Recordatorios automáticos de obligaciones fiscales.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
