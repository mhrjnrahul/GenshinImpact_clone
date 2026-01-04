import React from "react";

const City = ({ image, name, icon }) => {
  return (
    <div className="group relative w-full h-[35vh] overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:border-4 group-hover:scale-110"
      />

      {/* White border overlay */}
      <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:border-4 group-hover:border-white pointer-events-none"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center w-full">
          {/* City name - always centered */}
          <span className="text-white text-4xl font-(--font-ui) tracking-tight drop-shadow-lg group-hover:underline decoration-2 underline-offset-4 transition-all duration-300">
            {name}
          </span>
          
          {/* Icon positioned 50px to the right of the name */}
          {icon && (
            <div className="absolute left-[calc(50%+300px)] translate-x-[-50%] flex items-center justify-center">
              <img
                src={icon}
                alt=""
                className="w-full h-full object-cover opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default City;