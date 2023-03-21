import { Link } from "react-router-dom";

import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io";


function Welcome() {
  return (
    <div className="sm:container">
      <img className="w-full" src="./assets/bg-colors1.png" alt="" />
      <div className="w-10/12 my-0 mx-auto">
       
        <main className="mt-64">
          <h2 className="text-xl mb-2">Bienvenido a</h2>
          <h1 className="font-bold text-5xl w-2/4">Cuidando Ecosistemas</h1>


          <Link to='/login' className="mt-10  rounded-full bg-emerald-500 text-start p-4  text-white drop-shadow-xl shadow-emerald-700 text-xl flex justify-between items-center">
            Comenzar
            <IoIosArrowForward className="text-2xl justify-end" />
          </Link>




        </main>
      </div>
    </div>
  );
}

export default Welcome;
