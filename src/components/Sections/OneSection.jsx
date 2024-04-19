import data from "../../data.json";
function OneSection() {
  return (
    // <div className="bg-gray-400 flex w-full h-[100%] sm:h-[75vw] md:[80vw] lg:h-[50vw] sm:pt-16">
    <section id="services">
      <div
        className="flex w-[200px] h-[90%] max-w-screen sm:h-[70vw] md:[75vw] lg:h-[45vw] pt-4"
        style={{
          backgroundImage: `url(${data["section-two"].bg})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="grid grid-cols-3 w-full">
          <div className="flex flex-col justify-start md:h-full w-[80%] col-span-3 md:col-span-1 mx-auto mt-[22vh]">
            <h2>{data["section-two"].title}</h2>
            <p>{data["section-two"].paragraph}</p>
          </div>
          <div className="flex justify-center h-full col-span-3 md:col-span-2 md:pt-20 md:absolute md:right-0 md:pr-12">
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
      </div>
    </section>
  );
}
export default OneSection;
