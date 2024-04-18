import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import data from "../../data.json";
import { BsJustify } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 sm:px-16 py-2 flex justify-between items-center h-[78px] text-blue-custom bg-white shadow`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <img
            src={data["logo-withtext"].url}
            alt={data["logo-withtext"].alt}
            className="hidden lg:flex h-[32px] cursor-pointer"
          ></img>
        </a>
        {/* Aquí es donde estaba el problema */}
        <div className="hidden md:flex items-center justify-between space-x-12 ">
          {data["section-header"].navbar.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="hover:text-light-blue-custom"
            >
              <p className="text-md w-max" key={item.id}>
                {item.text}
              </p>
            </a>
          ))}
          <button className="bg-orange-custom text-white px-9 py-1.5 rounded-md">
            {data["section-header"].button.text}
          </button>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden"
        onClick={handleIsOpen}
      >
        {!isOpen && <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
