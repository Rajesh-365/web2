import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <img 
        src="../images/logo2.png" 
        alt="Loading..." 
        className="h-16 w-16 object-contain animate-pulse"
      />
    </div>
  );
};

export default LoadingSpinner;