import { RiAlarmLine, RiPlantLine, RiLightbulbLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Navbar from "../../components/Bar";
import MenuUser from "../../components/MenuUser";
import Search from "../../components/Search";
import Cards from "../../components/Cards";


function Home() {
  return (
    <div className="sm:container w-4/5 h-screen my-10 mx-auto relative">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl">
          Hola, <span className="font-bold">nombre</span>
        </h2>

        <MenuUser />
      </div>

      <Search />

      <div className="flex justify-between items-center gap-4 my-5">
        <Link
          to={""}
          className=" w-full h-20 bg-gray-50 rounded-3xl flex flex-col justify-start items-center p-3"
        >
          <RiAlarmLine className="text-2xl text-gray-400 mt-2"></RiAlarmLine>
          <p className="text-sm mt-1 text-gray-400">Avisos</p>
        </Link>

        <Link
          to={""}
          className=" w-full h-20 bg-gray-50 rounded-3xl flex flex-col justify-start items-center p-3 "
        >
          <RiPlantLine className="text-2xl text-gray-400 mt-2"></RiPlantLine>
          <p className="text-sm mt-1 text-gray-400">Identificar</p>
        </Link>

        <Link
          to={""}
          className="w-full h-20 bg-gray-50 rounded-3xl flex flex-col justify-start items-center p-3"
        >
          <RiLightbulbLine className="text-2xl text-gray-400 mt-1"></RiLightbulbLine>
          <p className="text-sm mt-1 text-gray-400">Cuidados</p>
        </Link>
      </div>


      <div className="w-full h-28 mt-10 rounded-3xl bg-emerald-50 flex justify-between items-center">
        <img className="w-32" src="./assets/icons/regando-plantas.png" alt="" />
        <p className="flex flex-col">Aprende a cuidar a tus plantas. <span className="text-xs">También cuidaras al ecosistema.</span> </p>
      </div>

      <h2 className="my-10 font-medium text-lg">Mis plantas</h2>
      <Cards></Cards>

      <Navbar />
    </div>
  );
}

export default Home;
