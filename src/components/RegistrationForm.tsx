
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from '@/components/ui/checkbox';

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // First create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      
      if (authError) throw authError;
      
      if (authData && authData.user) {
        // Then store additional user info in the Usuario table
        const { error: profileError } = await supabase
          .from('Usuario')
          .insert([
            { 
              id: authData.user.id,
              Nombre: formData.firstName,
              Apellido: formData.lastName,
              email: formData.email
            }
          ]);
          
        if (profileError) throw profileError;
        
        toast({
          title: "¡Registro recibido!",
          description: "Por favor, completa tu información fiscal.",
          variant: "default",
        });
        
        navigate('/rfc');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast({
        title: "Error en el registro",
        description: error instanceof Error ? error.message : "Ha ocurrido un error durante el registro",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ¿Listo para simplificar tus impuestos?
          </h2>
          <p className="text-resico-medium-gray mb-6 text-center">
            Regístrate ahora y recibe 14 días gratis en cualquiera de nuestros planes
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-resico-dark-gray mb-1">
                  Nombre
                </label>
                <Input 
                  id="firstName"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-resico-dark-gray mb-1">
                  Apellido
                </label>
                <Input 
                  id="lastName"
                  type="text"
                  placeholder="Tu apellido"
                  required
                  className="w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-resico-dark-gray mb-1">
                Correo Electrónico
              </label>
              <Input 
                id="email"
                type="email"
                placeholder="tu@correo.com"
                required
                className="w-full"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-resico-dark-gray mb-1">
                Teléfono
              </label>
              <Input 
                id="phone"
                type="tel"
                placeholder="55 1234 5678"
                className="w-full"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-resico-dark-gray mb-1">
                Contraseña
              </label>
              <Input 
                id="password"
                type="password"
                placeholder="Crea una contraseña segura"
                required
                className="w-full"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            
            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, terms: checked === true }))}
                disabled={isLoading}
                className="h-4 w-4 rounded border-gray-300 text-resico-red focus:ring-resico-red mt-1"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-resico-medium-gray">
                Acepto los <a href="/terminos" className="text-resico-red hover:underline">Términos y Condiciones</a> y la <a href="/privacidad" className="text-resico-red hover:underline">Política de Privacidad</a>.
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-resico-red hover:bg-opacity-90 py-6"
              disabled={isLoading || !formData.terms}
            >
              {isLoading ? 'Creando cuenta...' : 'Crear mi cuenta'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-resico-medium-gray">
              ¿Ya tienes una cuenta? <a href="/login" className="text-resico-red font-medium hover:underline">Inicia sesión</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
