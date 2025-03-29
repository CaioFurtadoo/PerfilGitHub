export const Profile = ({ avatar_url, name, bio }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-[25px] flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-[804px] items-center p-6 md:px-10">
      <img
        className="w-32 h-32 hover:scale-[102%] transition-all duration-300 md:w-[220px] md:h-[220px] rounded-full border-2 border-[#005CFF]"
        src={avatar_url}
        alt="Avatar"
      />
      <div className="flex flex-col gap-4 text-center md:text-left w-full">
        <h2 className="text-[#005CFF] text-xl md:text-2xl font-bold">{name || "Sem Nome"}</h2>
        <p className="font-light text-[15px]">{bio || "Sem biografia disponível"}</p>
      </div>
    </div>
  );
};