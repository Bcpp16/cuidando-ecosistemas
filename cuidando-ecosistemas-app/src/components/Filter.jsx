import React from "react";

function Filter() {
  return (
    <>
      <button
        type="button"
        class="text-gray-400 bg-white border-2 border-gray-300  focus:ring-transparent focus:border-gray-900 focus:text-gray-900  rounded-3xl text-xs px-5 py-2.5 mr-2 mb-2"
      >
        Todos
      </button>
      
      <button
        type="button"
        class="text-gray-400 bg-white border-2 border-gray-300  focus:ring-transparent focus:border-gray-900 focus:text-gray-900 text-xs  rounded-3xl  px-5 py-2.5 mr-2 mb-2"
      >
        Flores
      </button>

      <button
        type="button"
        class="text-gray-400 bg-white border-2 border-gray-300  focus:ring-transparent focus:border-gray-900 focus:text-gray-900  rounded-3xl text-xs px-5 py-2.5 mr-2 mb-2"
      >
        Arbustos
      </button>

      <button
        type="button"
        class="text-gray-400 bg-white border-2 border-gray-300  focus:ring-transparent focus:border-gray-900 focus:text-gray-900  rounded-3xl text-xs px-5 py-2.5 mr-2 mb-2"
      >
        Árboles
      </button>
    </>
  );
}

export default Filter;
