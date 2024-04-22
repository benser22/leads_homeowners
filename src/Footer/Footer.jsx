import React from "react";
import data from "../data.json";
import Layout from "../components/ui/Layout";

function Footer() {
  const handleClick = (e) => {
    e.target.style.filter = "brightness(150%)";
    setTimeout(() => {
      e.target.style.filter = "none";
    }, 50);
  };

  return (
    <footer className="py-8 px-20 bg-[#20202D] overflow-hidden">
      <Layout>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between text-[#F6F6F6]">
          <div>
            <p className="text-xs">{data["section-footer"].copy}</p>
          </div>
          <div>
            <a href="/">
              <img
                src={data["section-footer"].logo.url}
                alt={data["section-footer"].logo.alt}
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              width={32}
              src={data["section-footer"]["twitter-icon"]}
              alt={data["section-footer"]["social-media-alt"]}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data["section-footer"]["instagram-icon"]}
              alt={data["section-footer"]["social-media-alt"]}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data["section-footer"]["facebook-icon"]}
              alt={data["section-footer"]["social-media-alt"]}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data["section-footer"]["linkedin-icon"]}
              alt={data["section-footer"]["social-media-alt"]}
              className="cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
