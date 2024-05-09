import React, { useState, useEffect } from 'react';
import Layout from '../ui/Layout';
import data from '../../data.json';

function OurProjects() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0]);

  const toggleDescription = (index) => {
    if (index === 'card1') {
      setShowDescription1(!showDescription1);
    } else if (index === 'card2') {
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
            <div className="flex mt-12 flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold">
              <p className="text-light-blue-custom mx-auto">
                {data.project.title}
              </p>
              <hr className="bg-light-blue-custom mt-2 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>

              <div
                className="flex flex-col sm:flex-row text-center items-center justify-center p-8 rounded-xl mx-auto sm:w-4/5"
                style={{
                  boxShadow: '0px 0px 4px rgba(0,0,0,0.5)',
                  backgroundImage: `url(${data.project.bg})`,
                  backgroundSize: 'cover',
                  width: '80%',
                }}
              >
                <img
                  src={data.project.image}
                  alt="Image Projects"
                  className="h-60 w-60 object-cover rounded-full shadow-2xl border-2 border-slate-500"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-orange-custom text-md mx-auto font-bold">
                    {data.project.subtititle1}
                  </p>
                  <p className="text-orange-custom text-[14px] mx-auto font-semibold">
                    {data.project.subtititle2}
                  </p>
                  <p className="text-blue-custom text-base mt-4 text-center mx-auto px-4 w-5/6 font-semibold">
                    {data.project.paragraph}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 text-center mt-8 gap-8 px-8"> */}
            {/* Card 1 */}
            {/* <div className="bg-white shadow-xl rounded-lg overflow-hidden col-span-5 sm:col-span-1 pb-4">
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
              </div> */}

            {/* Card 2 */}
            {/* <div className="bg-white shadow-xl rounded-lg overflow-hidden col-span-5 sm:col-span-1 pb-4">
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
            </div> */}
          </div>
        </Layout>
      </section>
    </div>
  );
}

export default OurProjects;
