import React, { useState } from "react";
import Boton from "../../components/Button";
import Filter from "../../components/Filter";
import Input from "../../components/Search";

function Home() {
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleMostrarInput = () => {
    setMostrarInput(!mostrarInput);
  };

  return (
    <div className="sm:container w-4/5 h-screen my-10 mx-auto ">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl">Hola, <span font-bold>nombre</span></h2>

        <Boton mostrarInput={mostrarInput} onClick={handleMostrarInput} />
      </div>
      <Input mostrarInput={mostrarInput} />

      <Filter />
    </div>
  );
}

export default Home;
