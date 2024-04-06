const About = () => {
  return (
    <div className="relative w-full h-fit bg-white">
      <div className="mx-auto relative w-full">
        <div className="text-center my-16">
          <h6 className="text-lg">EXPLORE THE COSMOS</h6>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Join the Next Era of Space Exploration
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Orbit Odyssey is pioneering accessible space travel, inviting you to
            embark on unprecedented interstellar voyages. We are not just
            launching missions; we are launching dreams, making the vastness of
            space accessible to adventurers and explorers across the globe.
          </p>
        </div>
        <div className="relative lg:flex lg:items-center lg:justify-between mb-20  w-full mt-10">
          <div className="text-center  my-20 flex-1 flex flex-col justify-center items-start  p-8">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight lg:mx-auto text-gray-900 sm:text-4xl sm:leading-10">
              Unmatched Space Experiences
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From the thrill of zero-gravity to the awe of seeing Earth from
              space, Orbit Odyssey crafts experiences that defy expectation.
              Each journey with us is a step into the future of exploration,
              wrapped in the safety and comfort of our advanced spacecraft and
              habitats.
            </p>
          </div>
          <div className="flex flex-wrap justify-center my-10">
            <div className="w-5/6 ">
              <img
                className="rounded-lg shadow-xl"
                src="https://media.discordapp.net/attachments/1219606643730419812/1224308251735097454/file-gOcsu8SGn9owsJIr9D1eaJu7.png?ex=661d04e9&is=660a8fe9&hm=64186493d36563bcd19b738bb8a1669a7f01979f6a8f4a0a3f02b381c875d819&=&format=webp&quality=lossless&width=687&height=392"
                alt="Team"
              />
            </div>
          </div>
        </div>

        <div className="relative lg:flex lg:items-center lg:justify-between mb-20  w-full mt-10">
          <div className="flex flex-wrap justify-center my-10">
            <div className="w-5/6 ">
              <img
                className="rounded-lg shadow-xl"
                src="https://media.discordapp.net/attachments/1219606643730419812/1224310679993978921/file-H6yxDaEkIfr3oI7DifmaZmQG.png?ex=661d072c&is=660a922c&hm=fa97632b1cbc891ff315128e54909c29761e30e8575b1fa7c270741dec6f0ea5&=&format=webp&quality=lossless&width=687&height=392"
                alt="Team"
              />
            </div>
          </div>
          <div className="text-center  my-20 flex-1 flex flex-col justify-center items-start  p-8">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight lg:mx-auto text-gray-900 sm:text-4xl sm:leading-10">
              Safety: Our North Star
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Orbit Odysseys commitment to safety is unmatched. Our spacecraft
              are engineered with the latest technologies, our missions are
              meticulously planned, and our crews are extensively trained. With
              Orbit Odyssey, you are not just a traveler; you are a pioneer
              exploring with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
