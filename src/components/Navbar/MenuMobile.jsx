import { Link } from "react-scroll";
import data from "../../data.json";

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? "flex fadeIn" : "hidden"
      } text-blue-custom w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
      style={{ background: "rgba(0,0,0,0.3)" }}
    >
      <ul
        className={`fixed left-0 top-0 px-4 py-5 h-screen w-[250px] flex flex-col gap-4 items-start text-blue-custom bg-white shadow-md shadow-black/10`}
      >
        <div className="flex flex-col items-left justify-between gap-12 mt-6">
          <a href="/">
            <img
              src={data["logo-withtext"].url}
              alt={data["logo-withtext"].alt}
              className="h-[36px] cursor-pointer"
            />
            <hr className="mt-6"></hr>
          </a>
          {data["section-header"].navbar.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="flex items-center gap-4 hover:text-light-blue-custom cursor-pointer"
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[26px] h-[26px]"
              />
              <p className="font-bold">{item.text}</p>
            </Link>
          ))}
          <Link
            to={data["section-header"].button.href}
            key={data["section-header"].button.id}
            className="flex items-center gap-4 hover:text-light-blue-custom cursor-pointer"
            smooth={true}
            duration={700}
            spy={false}
            offset={-80}
          >
            <img
              src={data["section-header"].button.icon}
              alt={data["section-header"].button.text}
              className="w-[26px] h-[26px]"
            />
            <p className="font-bold">{data["section-header"].button.text}</p>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MenuMobile;
