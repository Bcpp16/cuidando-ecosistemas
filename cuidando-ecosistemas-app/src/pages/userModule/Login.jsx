import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <img className="w-full" src="./assets/background/bg-colors2.png" alt="" />

      <div className="w-10/12 my-0 mx-auto">
        <main className="mt-16">
          <h2 className="text-2xl font-medium mb-10 text-center">
            Iniciar sesión
          </h2>

          <form action="submit" className="text-center">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="mb-5 text-base rounded-full border-1 border-gray-300 p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="mb-5 text-base rounded-full border-1 border-gray-300  p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
            />

            <div className="flex justify-center">
              <Link
                to={"/home"}
                className="mt-5  rounded-full bg-emerald-500  p-4  text-white drop-shadow-xl shadow-emerald-700 text-lg"
              >
                Iniciar sesión
              </Link>
            </div>
            <p className="text-center text-gray-500 mt-5">
              También puedes ingresar mediante:
            </p>
            <div className=" my-0 mx-auto mt-5 w-32 flex justify-center gap-4">
              <button className="">
                <img className="w-10" src="./assets/icons/buscar.png" alt="" />
              </button>
              <button>
                <img
                  className="w-10"
                  src="./assets/icons/facebook.png"
                  alt=""
                />
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 mt-5">
            No tienes una cuenta?
          </p>

          <Link
            to="/register"
            className="flex justify-center  text-emerald-500 mt-2 underline decoration-emerald-500"
          >
            Registrarse
          </Link>
        </main>
      </div>
    </>
  );
}

export default Login;
