import { useState, useEffect, useCallback } from 'react';
import Layout from '../ui/Layout';
import data from '../../data.json';
import PropTypes from 'prop-types';

function OurProjects() {
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0]);

  const imageUrlsCard1 = [...data.project.photos[0].urls];

  const changeImage = useCallback(
    (index) => {
      setCurrentImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[index] = (newIndices[index] + 1) % imageUrlsCard1.length;
        return newIndices;
      });
    },
    [imageUrlsCard1.length]
  );

  useEffect(() => {
    const timers = currentImageIndices.map((_, index) =>
      setInterval(() => changeImage(index), 5000)
    );

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [currentImageIndices, changeImage]);

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
          </div>
        </Layout>
      </section>
    </div>
  );
}

OurProjects.propTypes = {
  changeImage: PropTypes.func,
  currentImageIndices: PropTypes.arrayOf(PropTypes.number),
};

export default OurProjects;
