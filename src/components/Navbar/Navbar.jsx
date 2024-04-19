import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import data from "../../data.json";
import { BsJustify, BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 sm:px-16 py-2 flex justify-between items-center h-[78px] text-blue-custom bg-white`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img
            src={data["logo-withtext"].url}
            alt={data["logo-withtext"].alt}
            className="sm:hidden lg:flex h-[32px] cursor-pointer"
          ></img>
          <img
            src={data.logo.url}
            alt={data.logo.alt}
            className="absolute top-6 left-6 hidden md:flex lg:hidden w-[32px] h-[32px] cursor-pointer"
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
              <p className="text-md w-max" key={item.id}>
                {item.text}
              </p>
            </Link>
          ))}
          <button className="orange-button">
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
