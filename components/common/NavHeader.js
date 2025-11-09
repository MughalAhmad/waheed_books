const NavHeader = () => {
  return (
    <div className="w-full h-20 bg-white flex justify-end items-center border-b border-[#1D1419]/20">

      <div className="flex justify-center pr-4 items-center gap-3.5 md:hidden">
        <span className="w-3 h-3 rounded-full bg-black" />
        <span className="text-base md:text-2xl font-semibold text-center">
          <span className="text-[#66D991]">Waheed</span> Books
        </span>
        <span className="w-3 h-3 rounded-full bg-black" />
      </div>

      <div className="hidden pr-8 gap-4 items-center md:flex">
        <img
          src="/svg/user.svg"
          className="rounded-full w-12 h-12"
        />
        <span className="font-bold text-lg">Admin</span>
      </div>
    </div>
  );
};

export default NavHeader;
