import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";
import Layout from "../ui/Layout";

const Testimonials = () => {
  const testimonials = data["section-six"].testimonials;
  const title = data["section-six"].title;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <section id="testimonials">
        <div
          className="px-4 pt-8 pb-8"
          style={{
            backgroundImage: `url(${data["section-two"].bg})`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className="flex flex-col text-center w-[98%]">
            <div className="flex flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold mb-14">
              <p className="text-light-blue-custom mx-auto">{title}</p>
              <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
            </div>
            <Slider {...settings} className="h-[22rem] px-6 w-[95%] mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="space-y-2 h-[22rem]">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="h-16 mx-auto rounded-full -mb-8"
                  />
                  <div
                    className="flex flex-col text-left px-4 py-6 rounded-lg mx-2 bg-white"
                    style={{ boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.08)" }}
                  >
                    <div className="flex gap-1">
                      <span
                        style={{
                          fontFamily: "Catamaran",
                          fontSize: "3rem",
                        }}
                        className="text-gray-custom"
                      >
                        "
                      </span>
                      <p className="text-left text-gray-custom text-[12px] mt-4">
                        {testimonial.paragraph}"
                      </p>
                    </div>

                    <p className="text-center mt-4 standard:text-left text-light-blue-custom font-semibold text-[14px] truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-center standard:text-left text-gray-custom text-[12px] truncate">
                      {testimonial.rol}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
