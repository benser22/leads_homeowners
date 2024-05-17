import data from '../data.json';
import Layout from '../components/ui/Layout';

function Footer() {
  return (
    <footer className="py-8 px-8 bg-[#20202D] overflow-hidden">
      <Layout>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between text-[#F6F6F6]">
          <div>
            <p className="text-xs">{data['section-footer'].copy}</p>
          </div>
          <a href="#">
            <div className="w-max gap-4 text-xl flex items-center font-bold">
              <img
                src={data.logo.url}
                alt={data.logo.alt}
                className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] cursor-pointer"
              />
              <p className="text-white hover:text-light-blue-custom">
                {data.logo.text}
              </p>
            </div>
          </a>
          <div className="flex items-center">
            <a href={data.bolg.url} target="_blank" className="ml-auto">
              <div
                title={data.bolg.text}
                className="text-center hover:text-light-blue-custom cursor-pointer flex items-center gap-1 justify-center w-full"
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
