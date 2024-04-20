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
            <div className="grid grid-cols-3 h-[110vw] sm:h-[120vw] mini:mb-64 phone:mb-48 sm:-mb-16 md:mb-32 md:h-[30vw] md:max-h-[50vw]">
              <div className="flex flex-col justify-start md:h-full w-[80%] col-span-3 md:col-span-1 mx-auto mt-[8vw] md:mt-[8vw] lg:mt-[12vw] md:mx-0 md:ml-36 lg:ml-24 2xl:ml-12">
                <h2 className="sm:text-xl lg:text-2xl 2xl:text-3xl text-light-blue-custom font-semibold sm:mb-4">
                  {data["section-two"].title}
                </h2>
                <p className="text-gray-custom 2xl:text-xl">
                  {data["section-two"].paragraph}
                </p>
              </div>
              <div className="flex justify-center h-full col-span-3 md:col-span-2 md:pt-20 md:absolute mt-10 sm:-mt-20 md:mt-0 md:right-0 md:pr-12 xl:mr-32">
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
              <div className="flex flex-col justify-center h-[500px] text-center">
                <div className="lg:w-1/5 justify-center mx-auto text-xl lg:text-2xl 2xl:text-3xl font-bold mb-8">
                  <p className="text-light-blue-custom">
                    {data["section-three"].title}
                  </p>
                  <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-1/3 mx-auto rounded-xl mb-4"></hr>
                </div>
                <div className="grid sm:grid-cols-3 gap-8 px-4">
                  <div className="w-full">
                    <div
                      className="rounded-full p-4"
                      style={{
                        display: "inline-block",
                        backgroundColor: "rgba(33, 123, 244, 0.08)",
                      }}
                    >
                      <img
                        className="mx-auto"
                        src={data["section-three"].Card1.icon}
                      />
                    </div>
                    <p className="text-light-blue-custom text-lg font-semibold mt-2">
                      {data["section-three"].Card1.title}
                    </p>
                    <p className="text-gray-custom text-md mt-4 text-center mx-auto px-4">
                      {data["section-three"].Card1.paragraph}
                    </p>
                  </div>
                  <div className="w-full">
                    <div
                      className="rounded-full p-4"
                      style={{
                        display: "inline-block",
                        backgroundColor: "rgba(33, 123, 244, 0.08)",
                      }}
                    >
                      <img
                        className="mx-auto"
                        src={data["section-three"].Card2.icon}
                      />
                    </div>
                    <p>Titulo 2</p>
                  </div>
                  <div className="w-full">
                    <div
                      className="rounded-full p-4"
                      style={{
                        display: "inline-block",
                        backgroundColor: "rgba(33, 123, 244, 0.08)",
                      }}
                    >
                      <img
                        className="mx-auto"
                        src={data["section-three"].Card3.icon}
                      />
                    </div>
                    <p>Titulo 3</p>
                  </div>
                </div>
              </div>
            </Layout>
          </section>
        </Layout>
      </div>
    </div>
  );
}
export default OneSection;
