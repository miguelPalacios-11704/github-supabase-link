
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/Logo';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de login (aquí se integraría con el backend real)
    setTimeout(() => {
      // Demo login - En producción esto sería reemplazado por una validación real
      if (email && password) {
        toast({
          title: '¡Inicio de sesión exitoso!',
          description: 'Bienvenido de nuevo a ImpuestApp',
        });
        navigate('/dashboard');
      } else {
        toast({
          title: 'Error de inicio de sesión',
          description: 'Correo o contraseña incorrectos. Por favor intenta de nuevo.',
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-resico-dark-gray mb-1">
                Correo Electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-resico-dark-gray mb-1">
                Contraseña
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-resico-medium-gray" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-resico-medium-gray" />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <Link to="/recuperar-contrasena" className="text-sm text-resico-red hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-resico-red hover:bg-opacity-90 py-6"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-resico-medium-gray">O continúa con</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Microsoft</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm">
            <p className="text-resico-medium-gray">
              ¿No tienes una cuenta? <Link to="/" className="text-resico-red font-medium hover:underline">Regístrate aquí</Link>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-resico-medium-gray">
          <p>© {new Date().getFullYear()} ImpuestApp. Todos los derechos reservados.</p>
          <p className="mt-1">
            <Link to="/privacidad" className="hover:underline">Política de Privacidad</Link> · 
            <Link to="/terminos" className="hover:underline ml-2">Términos de Servicio</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
