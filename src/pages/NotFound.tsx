
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Logo className="mb-8" />
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-resico-black">404</h1>
        <p className="text-xl text-resico-medium-gray mb-8">Oops! La página que buscas no existe.</p>
        <Button className="bg-resico-red hover:bg-opacity-90">
          <a href="/">Regresar al Inicio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
