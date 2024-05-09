import React from 'react';
import data from '../data.json';
import Layout from '../components/ui/Layout';

function Footer() {
  const handleClick = (e) => {
    e.target.style.filter = 'brightness(150%)';
    setTimeout(() => {
      e.target.style.filter = 'none';
    }, 50);
  };

  return (
    <footer className="py-8 px-8 bg-[#20202D] overflow-hidden">
      <Layout>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between text-[#F6F6F6]">
          <div>
            <p className="text-xs">{data['section-footer'].copy}</p>
          </div>
          <div>
            <a href="#">
              <img
                src={data['section-footer'].logo.url}
                alt={data['section-footer'].logo.alt}
                className="w-1/2 sm:w-[20vw] mx-auto max-w-[200px]"
              />
            </a>
          </div>
          {/* <div className="flex items-center gap-2">
            <img
              width={32}
              src={data['section-footer']['twitter-icon']}
              alt={data['section-footer']['social-media-alt']}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data['section-footer']['instagram-icon']}
              alt={data['section-footer']['social-media-alt']}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data['section-footer']['facebook-icon']}
              alt={data['section-footer']['social-media-alt']}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <img
              width={32}
              src={data['section-footer']['linkedin-icon']}
              alt={data['section-footer']['social-media-alt']}
              className="cursor-pointer"
              onClick={handleClick}
            />
          </div> */}
          <div className="flex items-center">
            <a href={data.bolg.url} target="_blank" className="ml-auto">
              <div
                title={data.bolg.text}
                className="text-center hover:text-[#dddddd] cursor-pointer flex items-center gap-1 justify-center w-full"
              >
                <img
                  width={32}
                  height={32}
                  src={data.bolg.icon}
                  alt={`${data.bolg.title} icon`}
                />
                <div className="flex flex-col text-left justify-center">
                  <p className="text-md md:text-lg font-bold">
                    {data.bolg.title}
                  </p>
                  <h6 className="hidden lg:flex text-[12px] -mt-1 text-gray_default">
                    {data.bolg.text}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
