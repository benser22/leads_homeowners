import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import data from "../../data.json";
import { BsJustify, BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 sm:px-16 py-2 flex justify-between items-center h-[78px] text-blue-custom bg-white shadow-sm`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img
            src={data["logo-withtext"].url}
            alt={data["logo-withtext"].alt}
            className="sm:hidden xl:flex h-[32px] cursor-pointer"
          ></img>
          <img
            src={data.logo.url}
            alt={data.logo.alt}
            className="hidden sm:flex md:hidden custom:flex xl:hidden w-[32px] h-[32px] cursor-pointer"
          ></img>
        </a>
        <div className="hidden sm:flex items-center justify-between sm:space-x-6 md:space-x-12 ">
          {data["section-header"].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-80}
              className="hover:text-light-blue-custom cursor-pointer"
            >
              <p
                className="text-md sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
          <button className="text-md sm:text-[12px] lg:text-[16px] w-max hidden md:flex lg:bg-[#f46d21] lg:text-white lg:py-[0.375rem] lg:px-[2.25rem] lg:rounded-md  cursor-pointer">
            {data["section-header"].button.text}
          </button>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
