import { MdSearch, MdSearchOff } from "react-icons/md";

function Boton(props) {
  return (
    <button onClick={props.onClick} className="rounded-2xl border p-2 border-gray-400">
      {props.mostrarInput ? <MdSearchOff className="icon"/> :  <MdSearch className="icon"/>}
    </button>
  );
}

export default Boton;
