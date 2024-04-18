import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import data from "../../data.json";
import { BsJustify, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();
  console.log(data);
  return (
    <header
      className={`
    fixed z-[98] top-0 left-0 w-full
    px-16 py-2 flex justify-between items-center  
    h-[78px] text-blue-custom bg-white shadow
   `}
    >
      <div>
        <img
          src={data["logo-withtext"].url}
          alt={data["logo-withtext"].alt}
          className="h-[32px]"
        ></img>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};
export default Navbar;
