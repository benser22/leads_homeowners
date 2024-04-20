import data from "../../data.json";
import Layout from "../ui/Layout";

function OneSection() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url(${data["section-two"].bg})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Layout>
          <section id="services">
            <div className="grid grid-cols-3 h-[140vw] sm:h-[110vw] md:h-[45vw] md:max-h-[50vw]">
              <div className="flex flex-col justify-start md:h-full w-[80%] col-span-3 md:col-span-1 mx-auto mt-[8vw] md:mt-[8vw] lg:mt-[12vw] md:mx-0 md:ml-36 lg:ml-24 2xl:ml-12">
                <h2 className="sm:text-xl lg:text-2xl 2xl:text-3xl text-light-blue-custom font-semibold sm:mb-4">
                  {data["section-two"].title}
                </h2>
                <p className="text-gray-custom 2xl:text-xl">
                  {data["section-two"].paragraph}
                </p>
              </div>
              <div className="flex justify-center h-full col-span-3 md:col-span-2 md:pt-20 md:absolute mt-0 sm:-mt-20 md:mt-0 md:right-0 md:pr-12 xl:mr-32">
                <img
                  src={data["section-two"].circle1}
                  alt="image"
                  className="h-[45vw] md:h-[25vw]"
                />
                <div className="flex flex-col -mt-8">
                  <img
                    src={data["section-two"].circle2}
                    alt="image"
                    className="h-[35vw] md:h-[15vw]"
                  />
                  <img
                    src={data["section-two"].circle3}
                    alt="image"
                    className="h-[35vw] md:h-[15vw]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="whyus">
            <Layout>
              <div className="px-8 h-[500px]">
                <hr className="bg-light-blue-custom h-2 rounded-xl mb-4"></hr>
              </div>
            </Layout>
          </section>
        </Layout>
      </div>
    </div>
  );
}
export default OneSection;
