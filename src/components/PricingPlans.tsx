
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield, BookOpen, Video } from 'lucide-react';

const PricingPlans: React.FC = () => {
  return (
    <section id="planes" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Planes</h2>
          <p className="text-lg text-resico-medium-gray max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen atención personalizada y seguridad garantizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FLEX Plan */}
          <div className="plan-card">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-2">FLEX</div>
              <div className="text-xs font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">POPULAR</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Paga hasta que el SAT te deposite</h3>
            <p className="text-resico-medium-gray mb-4">
              El plan que se adapta a ti: recupera tu dinero del SAT sin pago anticipado.
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600 mb-6">
              Empezar gratis
            </Button>
            <h4 className="font-medium mb-4">Incluye:</h4>
            <ul className="space-y-3">
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Presentación de la declaración anual.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Cobramos un porcentaje solo por lo recuperado.*</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Perseguimos tu devolución.**</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Asesoría incluida todo el año.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Acceso a cursos básicos del Centro de Capacitación.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Asistencia vía chat respuesta en menos de 48h.</span>
              </li>
            </ul>
          </div>

          {/* RESICO PRO Plan - Updated price to $750/year */}
          <div className="plan-card border-resico-red border-2 relative">
            <div className="absolute -top-4 -right-4 bg-resico-red text-white rounded-full px-3 py-1 text-sm font-semibold">
              MEJOR PRECIO
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PRO</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">$750 <span className="text-lg font-normal text-resico-medium-gray">al año</span></h3>
            <p className="text-resico-medium-gray mb-4">
              La solución sin esfuerzo para tu declaración: de forma sencilla y precisa.
            </p>
            <Button className="w-full bg-resico-red hover:bg-opacity-90 mb-6">
              Empezar gratis
            </Button>
            <h4 className="font-medium mb-4">Incluye:</h4>
            <ul className="space-y-3">
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Facturación y declaraciones ilimitadas.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Automatización total vía Inteligencia Artificial (IA-Tax).</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Optimización automática de deducciones.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Resolución fiscal inmediata (menos de 1 hora).</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Monitoreo fiscal proactivo.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Reportes financieros personalizados.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Acceso completo al Centro de Capacitación con todos los cursos y videos.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Asistencia prioritaria vía chat (24h).</span>
              </li>
            </ul>
          </div>

          {/* PLUS Plan - Verified to be $1200/year but pricing in UI shows as $750/year - updating to match */}
          <div className="plan-card">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">PLUS</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">$1,200 <span className="text-lg font-normal text-resico-medium-gray">al año</span></h3>
            <p className="text-resico-medium-gray mb-4">
              Más allá de lo básico, asesoría premium: Sin preocupaciones, sin trámites.
            </p>
            <Button className="w-full bg-gray-800 hover:bg-gray-900 mb-6">
              Empezar gratis
            </Button>
            <h4 className="font-medium mb-4">Incluye:</h4>
            <ul className="space-y-3">
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Presentación de la declaración anual.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Perseguimos tu devolución ante el SAT.**</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Gestionamos los requerimientos que solicite el SAT.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Asesor dedicado a ti durante todo el proceso.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Acceso a cursos selectos del Centro de Capacitación.</span>
              </li>
              <li className="feature-item">
                <Check className="text-green-500" size={18} />
                <span>Asistencia vía chat/llamada/videollamada con respuesta en menos de 24h.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-resico-medium-gray max-w-3xl mx-auto text-center">
          <p>* Se aplica un porcentaje sobre el monto recuperado, consulta los términos y condiciones.</p>
          <p>** Nosotros gestionamos el seguimiento de tu devolución con el SAT hasta que sea depositada.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
