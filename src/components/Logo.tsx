
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showTagline = true }) => {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <div className="flex items-end">
        <div className="border-2 border-black p-1">
          <span className="text-3xl font-bold">I</span>
        </div>
        <div className="ml-2">
          <span className="text-xl font-bold">ImpuestApp</span>
          {showTagline && (
            <div className="text-xs text-resico-medium-gray whitespace-nowrap">
              Declaraciones al día con mucha alegría
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
