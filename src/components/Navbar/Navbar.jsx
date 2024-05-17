import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 py-2 flex justify-between items-center h-[78px] text-blue-custom bg-white shadow-sm`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <div className="w-max gap-4 text-xl flex items-center font-bold">
            <img
              src={data.logo.url}
              alt={data.logo.alt}
              className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] cursor-pointer"
            />
            <p className="text-blue-custom hover:text-light-blue-custom">
              {data.logo.text}
            </p>
          </div>
        </a>
        <div className="hidden sm:flex items-center justify-between space-x-4 md:space-x-5 xl:space-x-10">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-75}
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
          <a
            href={data['section-header'].blog.href}
            target="_blank"
            className="text-md sm:text-[12px] lg:text-[16px] w-max hover:text-light-blue-custom cursor-pointer"
          >
            {data['section-header'].blog.text}
          </a>
          <a
            href="mailto:lead_harbor@gmail.com"
            className="text-md sm:text-[12px] lg:text-[16px] w-max hidden md:flex lg:bg-[#f46d21] lg:text-white lg:py-[0.375rem] lg:px-[2.25rem] lg:rounded-md cursor-pointer"
          >
            {data['section-header'].button.text}
          </a>
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
