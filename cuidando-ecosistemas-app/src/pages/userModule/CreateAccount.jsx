import { Link } from "react-router-dom";


function CreateAccount() {
  return (
    <>
    <img className="w-full" src="./assets/bg-colors3.png" alt="banner" />

    <div className="w-10/12 my-0 mx-auto ">
      <main className="mt-16">
        <h2 className="text-2xl font-medium mb-10 text-center">
          Crear cuenta
        </h2>

        <form action="submit" className="text-center">
        <input
            type="text"
            placeholder="Nombre completo"
            className="mb-5 rounded-full border-1 p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="mb-5 rounded-full border-1 p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="mb-5 rounded-full border-1 p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
          />

          <div className="flex justify-center">

          <button className="mt-5  rounded-full bg-emerald-500  p-4  text-white drop-shadow-xl shadow-emerald-700 text-xl" >
            Registrarse
          </button>



          </div>
          <p className="text-center text-gray-500 mt-5">También te puedes registrar mediante:</p>
          <div className=" my-0 mx-auto mt-5 w-32 flex gap-4" >
            <button className="">
              <img className="w-12" src="./assets/buscar.png" alt="logo google" />
            </button>
            <button>
            <img className="w-12" src="./assets/facebook.png" alt="logo facebook" />

            </button>

          </div>

        </form>

        <p className="text-center text-gray-500 mt-5">¿Ya tienes una cuenta?</p>

        <Link to='/login' className="flex justify-center  text-emerald-500 mt-2 underline decoration-emerald-500">Iniciar sesión</Link>
      </main>
    </div>
  </>
  )
}

export default CreateAccount