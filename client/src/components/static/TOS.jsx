const TermsOfService = () => {
  return (
    <div className="relative w-full h-fit bg-header border-white border-t-2">
      {/* Header Section */}
      <div className="text-center py-16 mx-auto max-w-lg bg-header">
        <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          Terms of Service
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          Please read these terms of service carefully.
        </p>
      </div>

      {/* Terms Section */}
      <div className=" p-16 lg:flex lg:flex-col lg:items-center lg:justify-center w-full bg-white">
        {/* You can repeat this block for different sections of your TOS */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            1. Agreement to Terms
          </h3>
          <p className="text-md text-gray-600">
            By accessing our website, you agree to be bound by these Terms of
            Service . If you disagree with any part of the TOS, you may not
            access the service. These TOS apply to all visitors, users, and
            others who wish to access or use the service.
          </p>
        </div>

        {/* <!-- Description of Service --> */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            2. Description of Service
          </h3>
          <p className="text-md text-gray-600">
            Orbit Odyssey offers a unique array of interstellar travel services
            , including orbital excursions, celestial sightseeing tours, and
            luxury space habitat accommodations. Specific terms and conditions
            for each Service are available upon booking confirmation.
          </p>
        </div>

        {/* <!-- User Accounts --> */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            3. User Accounts
          </h3>
          <p className="text-md text-gray-600">
            When you create an account with us, you guarantee that the
            information you provide is accurate, complete, and current at all
            times. Inaccurate, incomplete, or obsolete information may result in
            the immediate termination of your account on our Service.
          </p>
        </div>

        {/* <!-- Intellectual Property --> */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            4. Intellectual Property
          </h3>
          <p className="text-md text-gray-600">
            The Service and its original content (excluding User Content),
            features, and functionality are and will remain the exclusive
            property of Orbit Odyssey and its licensors. Our trademarks and
            trade dress may not be used in connection with any product or
            service without the prior written consent of Orbit Odyssey.
          </p>
        </div>

        {/* <!-- Contact Information --> */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            5. Contact Information
          </h3>
          <p className="text-md text-gray-600">
            For any queries or concerns regarding the TOS, please contact our
            support team at support@orbitodyssey.space or call us at +123456789.
            At Orbit Odyssey, we are always here to help you embark on your next
            great adventure or answer any questions you might have about our
            services. Our team of dedicated space travel experts and customer
            service representatives are on standby to provide you with the
            support you need to make your interstellar travel dreams a reality.
          </p>
        </div>

        {/* Add more sections as needed */}
      </div>

      {/* Footer Section */}
      <div className="text-center py-10 bg-white">
        <p className="text-gray-400">© [Orbit Odyssey]. All rights reserved.</p>
      </div>
    </div>
  );
};

export default TermsOfService;
