import Image from "next/image";
const NavHeader = () => {
  return (
    <div className="w-full h-20 bg-white flex justify-end items-center">

      <div className="flex justify-center pr-4 items-center gap-3.5 md:hidden">
        <span className="w-3 h-3 rounded-full bg-black" />
        <span className="text-base md:text-2xl font-semibold text-center">
          <span className="text-[#66D991]">Waheed</span> Books
        </span>
        <span className="w-3 h-3 rounded-full bg-black" />
      </div>

      <div className="hidden pr-8 gap-4 items-center md:flex">
        <Image
          src="/svg/user.svg"
          width={60}
          height={60}
          className="rounded-full"
        />
        <span className="font-bold text-lg">Admin</span>
      </div>
    </div>
  );
};

export default NavHeader;
