import React from "react";

function Filter() {
  return (
    <div className="w-full flex justify-between items-center">
    
      <button
        type="button"
        class="text-gray-400    focus:ring-transparent focus:text-emerald-500    text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Todos
      </button>
      
      <button
        type="button"
        class="text-gray-400    focus:ring-transparent focus:text-emerald-500    text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Interiores
      </button>

      <button
        type="button"
        class="text-gray-400 bg-white border-2 border-gray-300 focus:ring-transparent focus:border-gray-900 focus:text-gray-900 rounded-3xl text-xs px-5 py-2.5 mr-2 mb-2"
      >
        Exteriores
      </button>
      

      
    </div>
  );
}

export default Filter;
