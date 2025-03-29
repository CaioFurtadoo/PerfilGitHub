import { useState } from "react";
import search from "../../assets/Search.svg";

export const Input = ({ onSearch }) => {

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="focus-within:outline-2 focus-within:outline-[#005CFF] flex items-center w-full max-w-[500px] border border-[#DDDDDD] rounded-[10px] bg-white">
      <input
        className="px-4 py-[18px] w-full placeholder-black  rounded-[10px] bg-white outline-0 text-[20px]"
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="cursor-pointer rounded-[10px] group h-full p-[19px] hover:bg-[#004cff] bg-[#005CFF]"
        onClick={handleSearch}
      >
        <img className="w-[33px] group-hover:scale-110 transition-all" src={search} alt="search icon" />
      </button>
    </div>
  );
};