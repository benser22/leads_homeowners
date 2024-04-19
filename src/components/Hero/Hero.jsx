import data from "../../data.json";

function Hero() {
  return (
    <section id="home">
      <div
        className="flex w-full h-[90%] max-w-screen sm:h-[70vw] md:[75vw] lg:h-[45vw] mt-[10vh] py-12 sm:pt-16 sm:mt-[80px]"
        style={{
          backgroundImage: `url(${data["section-one"].bg})`,
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-4">
          <div className="hidden md:flex ml-14 w-3/4 max-w-4/5 lg:ml-40 text-5xl text-white font-bold">
            {data["section-one"].title}
          </div>
          <form
            className="md:mr-28 sm:mx-auto p-4 md:px-6 w-full sm:w-1/2 md:w-2/3 lg:w-1/2 col-span-2 md:col-span-1 rounded-md border-white border-2"
            style={{ backgroundColor: "rgba(25, 42, 104, 0.75)" }}
          >
            <h2 className="text-2xl font-base mb-4 text-center text-white">
              {data["section-one"].form["title-form"]}
            </h2>
            <input
              type="text"
              className="input-custom"
              placeholder={data["section-one"].form["full-name"]}
            />
            <input
              type="email"
              className="input-custom"
              placeholder={data["section-one"].form.email}
            />
            <input
              type="tel"
              className="input-custom"
              placeholder={data["section-one"].form.number}
            />
            <input
              type="text"
              className="input-custom"
              placeholder={data["section-one"].form.city}
            />
            <div className="w-full flex justify-center">
              <button type="reset" className="orange-button">
                {data["section-one"].form.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;