
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast({
          title: "Sesión no encontrada",
          description: "Por favor inicia sesión para continuar",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }

      try {
        // Fetch user data from the Usuario table
        const { data: userDataResponse, error } = await supabase
          .from('Usuario')
          .select('*')
          .eq('id', data.session.user.id)
          .single();
          
        if (error) throw error;
        
        setUserData(userDataResponse);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast({
          title: "Error al cargar datos",
          description: "No se pudo cargar la información del usuario",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();
  }, [navigate, toast]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error al cerrar sesión",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            
            {loading ? (
              <div className="flex justify-center">
                <p>Cargando información...</p>
              </div>
            ) : userData ? (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-resico-medium-gray">Nombre</p>
                      <p className="font-medium">{userData.Nombre} {userData.Apellido}</p>
                    </div>
                    <div>
                      <p className="text-sm text-resico-medium-gray">Correo Electrónico</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-resico-medium-gray">RFC</p>
                      <p className="font-medium">{userData.rfc || 'No registrado'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={handleLogout} 
                    variant="outline"
                    className="text-resico-red border-resico-red hover:bg-resico-red hover:text-white"
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-resico-medium-gray">No se encontraron datos del usuario</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
