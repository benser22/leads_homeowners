import data from "../../data.json";
import Layout from "../ui/Layout";

function AboutSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${data["section-two"].bg})`,
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <section id="about">
        <Layout>
          <div className="mt-28 sm:mt-0 px-4 py-8">
            <div className="grid mt-16 grid-cols-1 sm:grid-cols-3 items-center h-[350px] py-8 gap-3">
              <img
                className="hidden sm:block ml-auto mb-auto rounded-sm"
                width={190}
                src={data["section-four"].photo1.url}
                alt={data["section-four"].photo1.alt}
              />
              <img
                className="mx-auto mt-auto rounded-sm"
                width={300}
                src={data["section-four"].photo2.url}
                alt={data["section-four"].photo2.alt}
              />
              <img
                className="hidden sm:block mr-auto mt-auto mb-3 rounded-sm"
                width={220}
                src={data["section-four"].photo3.url}
                alt={data["section-four"].photo3.alt}
              />
            </div>

            <div className="flex mt-12 flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold mb-8">
              <p className="text-light-blue-custom mx-auto">
                {data["section-four"].title}
              </p>
              <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
              <p className="sm:w-1/2 text-gray-custom text-base lg:text-xl font-normal mt-4 text-center mx-auto px-4">
                {data["section-four"].paragraph}
              </p>
            </div>
            <div className="flex w-full justify-center">
              <button className="bg-white text-light-blue-custom border-light-blue-custom px-20 py-1 rounded-md border buttom-custom">
                {data["section-four"].button}
              </button>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}
export default AboutSection;
