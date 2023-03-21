function Input(props) {
  return props.mostrarInput ? (
    <input
      type="text"
      placeholder="Buscar"
      className="mb-5 rounded-full border-1 p-4 focus:ring-transparent focus:border-green-500 focus:border-2"
    />
  ) : null;
}

export default Input;
