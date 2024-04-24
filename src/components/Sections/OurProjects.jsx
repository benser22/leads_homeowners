import React, { useState, useEffect } from "react";
import Layout from "../ui/Layout";
import data from "../../data.json";

function OurProjects() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0]);

  const toggleDescription = (index) => {
    if (index === "card1") {
      setShowDescription1(!showDescription1);
    } else if (index === "card2") {
      setShowDescription2(!showDescription2);
    }
  };

  const imageUrlsCard1 = [...data.project.photos[0].urls];

  const imageUrlsCard2 = [...data.project.photos[1].urls];

  const changeImage = (index) => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] + 1) % imageUrlsCard1.length;
      return newIndices;
    });
  };

  useEffect(() => {
    const timers = currentImageIndices.map((_, index) =>
      setInterval(() => changeImage(index), 5000)
    );

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <div>
      <section id="projects">
        <Layout>
          <div className="flex flex-col w-full pb-20">
            <div className="flex mt-12 flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold mb-8">
              <p className="text-light-blue-custom mx-auto">
                {data.project.title}
              </p>
              <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
              <p className="sm:w-1/2 text-gray-custom text-base lg:text-xl font-normal mt-4 text-center mx-auto px-4">
                {data.project.paragraph}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-center mt-8 gap-8 px-8">
              {/* Card 1 */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden col-span-5 sm:col-span-1 pb-4">
                <img
                  src={imageUrlsCard1[currentImageIndices[0]]}
                  alt={data.project.photos[0].alt}
                  className="w-full max-h-96 min-h-96 transition-opacity duration-500"
                  style={{ objectFit: "cover" }}
                />
                <div className="p-4 relative">
                  <h3 className="truncate text-light-blue-custom text-lg font-semibold mb-2 cursor-pointer active:text-blue-400">
                    {data.project.photos[0].title}
                  </h3>
                  <p className="text-gray-custom truncate">
                    {data.project.photos[0].subtitle}
                  </p>
                  <button
                    className="orange-button mt-4"
                    onClick={() => toggleDescription("card1")}
                  >
                    {!showDescription1
                      ? data.project.photos[0].button
                      : data.project.photos[0]["button-back"]}
                  </button>
                  {showDescription1 && (
                    <div className="top-[5%] break2:absolute mt-4 break2:mt-0 bg-white">
                      <p className="text-gray-custom">
                        {data.project.photos[0].description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden col-span-5 sm:col-span-1 pb-4">
                <img
                  src={imageUrlsCard2[currentImageIndices[1]]}
                  alt={data.project.photos[1].alt}
                  className="w-full max-h-96 min-h-96 transition-opacity duration-500"
                  style={{ objectFit: "cover" }}
                />
                <div className="p-4 relative">
                  <h3 className="truncate text-light-blue-custom text-lg font-semibold mb-2 cursor-pointer active:text-blue-400">
                    {data.project.photos[1].title}
                  </h3>
                  <p className="text-gray-custom truncate">
                    {data.project.photos[1].subtitle}
                  </p>
                  <button
                    className="orange-button mt-4"
                    onClick={() => toggleDescription("card2")}
                  >
                    {!showDescription2
                      ? data.project.photos[1].button
                      : data.project.photos[1]["button-back"]}
                  </button>
                  {showDescription2 && (
                    <div className="top-[5%] break2:absolute mt-4 break2:mt-0 bg-white">
                      <p className="text-gray-custom">
                        {data.project.photos[1].description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}

export default OurProjects;
