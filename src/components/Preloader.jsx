import React from 'react';
import { Dumbbell } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="animate-bounce">
        <Dumbbell className="w-16 h-16 text-red-600" />
      </div>
    </div>
  );
};

export default Preloader;