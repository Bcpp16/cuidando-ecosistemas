import { RiSearchLine } from "react-icons/ri";

function Search() {
  return (
    <>
     
        <input
          type="text"
          className=" w-full mb-5 rounded-full border-1 border-gray-300 p-3 focus:ring-transparent focus:border-green-500 focus:border-2"
          placeholder="Buscar"
        />
        
      
    </>
  );
}

export default Search;
