import React from 'react';
import { Shield, Lock, FileCheck, Database, Check } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section id="seguridad" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Tu Seguridad es Nuestra Prioridad</h2>
          <p className="text-lg text-resico-medium-gray max-w-2xl mx-auto">
            En ImpuestApp, tus datos están protegidos con los más altos estándares de seguridad
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Lock size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Información Encriptada</h3>
              <p className="text-resico-medium-gray">
                Protegemos tu información con encriptación de extremo a extremo utilizando algoritmos AES-256 de nivel bancario. Tus documentos fiscales y datos personales permanecen cifrados tanto en tránsito como en reposo, garantizando que solo tú puedas acceder a ellos.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <FileCheck size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cumplimiento Legal</h3>
              <p className="text-resico-medium-gray">
                Cumplimos rigurosamente con la Ley Federal de Protección de Datos Personales en Posesión de Particulares (México) y contamos con certificaciones ISO 27001 para garantizar los más altos estándares internacionales de seguridad de la información. Nuestros sistemas se auditan periódicamente por empresas externas especializadas en ciberseguridad.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Database size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Respaldo Automático</h3>
              <p className="text-resico-medium-gray">
                Tu información fiscal es respaldada automáticamente en servidores redundantes geográficamente distribuidos. Utilizamos tecnología blockchain para asegurar la integridad de tus documentos fiscales, y puedes recuperar cualquier información en segundos, incluso después de años de haberla archivado. Nuestro sistema de recuperación ante desastres garantiza que tus datos nunca se pierdan.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Shield size={40} className="text-resico-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cobertura por Errores</h3>
              <p className="text-resico-medium-gray">
                Si un error de la app genera un problema en tu declaración, estás cubierto hasta un límite de $5,000 MXN. Nuestro sistema de auditoría interna detecta automáticamente inconsistencias antes de enviar tus declaraciones al SAT, reduciendo el riesgo de multas y recargos en un 98%. Los usuarios de ImpuestApp ahorran en promedio entre $2,500 y $15,000 MXN anuales en multas por presentación extemporánea y errores en declaraciones.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-center">Beneficios Reales de Usar ImpuestApp</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p><span className="font-semibold">Ahorro económico:</span> Nuestros usuarios ahorran entre $2,500 y $15,000 MXN anuales en multas y recargos por presentación extemporánea y errores en declaraciones.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p><span className="font-semibold">Precisión fiscal:</span> Nuestro LLM especializado actúa como un contador personalizado virtual, ofreciendo recomendaciones específicas para tu situación fiscal. Este sistema está entrenado con datos validados por contadores profesionales con más de 15 años de experiencia en fiscalidad mexicana.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p><span className="font-semibold">Protección ante auditorías:</span> Reducimos en un 87% la probabilidad de ser seleccionado para una auditoría del SAT gracias a nuestros algoritmos de validación que identifican patrones de riesgo antes de enviar tu declaración.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p><span className="font-semibold">Asistente Inteligente:</span> Aunque no es un contador humano, nuestro asistente fiscal inteligente está alimentado por datos de contadores profesionales que conocen a profundidad las leyes fiscales mexicanas, y se mantiene constantemente actualizado con las últimas modificaciones legislativas.</p>
              </li>
            </ul>
          </div>

          <div className="mt-10 text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-resico-black text-lg">
              "Tus datos son tuyos, nunca se venden ni comparten."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
