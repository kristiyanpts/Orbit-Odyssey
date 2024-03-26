const ContactUs = () => {
  return (
    <div className="relative w-full h-fit bg-white">
      {/* Welcome Section */}
      <div className="text-center my-16 mx-auto max-w-lg ">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Lets make something awesome together.
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Drop us a line, or give us a heads up if you are interested in
          visiting us.
        </p>
      </div>

      {/* Contacts Section*/}
      <div className="text-center my-20 mx-auto py-20 px-4 bg-header">
        {" "}
        <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-10">
          Contacts
        </h2>
        <div className="flex flex-col md:flex-row justify-around max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="mb-2">
              <i className="fa-solid fa-location-dot text-4xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white">ADDRESS</h3>
            <p className="text-sm text-gray-300">
              {/* Add your address lines here */}
            </p>
          </div>

          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="mb-2">
              <i className="fa-solid fa-phone text-4xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white">PHONE</h3>
            <p className="text-sm text-gray-300">
              {/* Add your phone numbers here */}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2">
              <i className="fa-solid fa-envelope text-4xl text-white"></i>
            </div>
            <h3 className="text-lg font-semibold text-white">EMAIL</h3>
            <p className="text-sm text-gray-300">
              {/* Add your email addresses here */}
            </p>
          </div>
        </div>
      </div>

      {/* Get in touch Section */}
      <div className="my-20 p-16 lg:flex lg:items-center lg:justify-center w-full bg-white">
        <div className="text-center mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-header sm:text-5xl md:text-6xl">
            Get in touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Drop us a line, or give us a heads up if you are interested in
            visiting us.
          </p>
        </div>
        <form className="space-y-6 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Your name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md"
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Your phone number"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-buttonBase hover:bg-buttonHover dark:hover:bg-buttonHover"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
