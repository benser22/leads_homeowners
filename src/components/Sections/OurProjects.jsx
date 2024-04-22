import data from "../../data.json";
import Layout from "../ui/Layout";

function OurProjects() {
  return (
    <div
      style={{
        backgroundImage: `url(${data["section-two"].bg})`,
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <section id="projects">
        <Layout>
          <div className="flex flex-col w-full py-24">
            <div className="flex flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold mb-8">
              <p className="text-light-blue-custom mx-auto">
                {data["section-five"].title}
              </p>
              <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
              <p className="sm:w-1/2 text-gray-custom text-base lg:text-xl font-normal mt-4 text-center mx-auto px-4">
                {data["section-five"].paragraph}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 2xl:grid-cols-5 text-center mt-8 gap-8 px-8">
              {Object.values(data["section-five"].photos).map(
                (photo, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-md rounded-lg overflow-hidden col-span-5 sm:col-span-1 ${
                      index === 4 && "hidden 2xl:block"
                    } pb-4`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full max-h-52"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="truncate text-light-blue-custom text-lg font-semibold mb-2 cursor-pointer active:text-blue-400">
                        {photo.title}
                      </h3>
                      <p className="text-gray-custom truncate">
                        {photo.subtitle}
                      </p>
                    </div>
                    <button className="orange-button">{photo.button}</button>
                  </div>
                )
              )}
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}
export default OurProjects;
