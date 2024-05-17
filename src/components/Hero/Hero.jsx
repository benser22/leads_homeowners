import { useState } from 'react';
import data from '../../data.json';

function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phoneNumber, city } = formData;
    const mailtoLink = `mailto:${data.contact}?subject=Contact Form&body=Name: ${fullName}%0DEmail: ${email}%0DPhone: ${phoneNumber}%0DCity: ${city}`;
    window.location.href = mailtoLink;

    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      city: '',
    });
  };

  return (
    <section id="home">
      <div
        className="flex w-full h-[90%] max-w-screen sm:h-[70vw] md:[75vw] lg:h-[45vw] mt-[5vh] py-12 sm:pt-16 sm:mt-[80px]"
        style={{
          backgroundImage: `url(${data['section-one'].bg})`,
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center px-4 justify-center">
          <div
            className="hidden md:flex w-[70%] mx-auto text-5xl text-white font-bold leading-[3.2rem]"
            style={{ textShadow: '2px 2px 4px black' }}
          >
            {data['section-one'].title}
          </div>
          <form
            className="md:mr-28 lg:-mt-8 xl:mt-0 sm:mx-auto p-4 md:px-6 w-full sm:w-1/2 md:w-2/3 col-span-2 md:col-span-1 rounded-md border-white border-2"
            style={{ backgroundColor: 'rgba(25, 42, 104, 0.50)' }}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-base mb-4 text-center text-white">
              {data['section-one'].form['title-form']}
            </h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="sr-only">
                {data['section-one'].form['full-name']}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="input-custom"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={data['section-one'].form['full-name']}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                {data['section-one'].form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-custom"
                value={formData.email}
                onChange={handleChange}
                placeholder={data['section-one'].form.email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="sr-only">
                {data['section-one'].form.number}
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="input-custom"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder={data['section-one'].form.number}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="sr-only">
                {data['section-one'].form.city}
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="input-custom"
                value={formData.city}
                onChange={handleChange}
                placeholder={data['section-one'].form.city}
              />
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="orange-button">
                {data['section-one'].form.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
