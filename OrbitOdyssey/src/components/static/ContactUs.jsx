const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Lets make something awesome together.
        </h2>
        <p className="mt-4 text-lg leading-6">
          Drop us a line, or give us a heads up if you are interested in
          visiting us.
        </p>
      </div>

      <div className="mt-12 md:flex md:justify-center">
        <form className="space-y-6">
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

          <div className="md:flex-1 md:mr-2">
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

          <div className="md:flex-1 md:ml-2">
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
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">
          Survicate Office | Przyrynek 14, Warsaw, Poland
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
