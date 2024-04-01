import Carousel1 from "../../../assets/carousel-1.png";
import Carousel2 from "../../../assets/carousel-2.png";
import Carousel3 from "../../../assets/carousel-3.png";
import Carousel4 from "../../../assets/carousel-4.png";
import Carousel5 from "../../../assets/carousel-5.png";
import Carousel6 from "../../../assets/carousel-6.png";
import Carousel7 from "../../../assets/carousel-7.png";
import Carousel8 from "../../../assets/carousel-8.png";
import { Carousel } from "flowbite-react";

const Trips = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${Carousel1})` }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 text-white"></div>
      </div>
      <div className="flex justify-around p-10">
        <div className="container p-8 flex flex-col justify-center items-center bg-beige-100 w-1/3">
          {/* Change bg-beige-100 to actual background color */}
          <div className="flex flex-col items-center space-x-4 mb-4 lg:mb-0">
            {/* <div className="text-lg font-light">Howdot. 32</div> */}
            <div className="text-7xl font-bold">THE MOON</div>
            <button className="bg-orange-500 text-white font-bold py-2 px-8 rounded-full w-80 h-20 m-10 text-xl">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="w-1/2 aspect-video ">
          <Carousel>
            <img className="w-full object-cover" src={Carousel1} alt="..." />
            <img className="w-full object-cover" src={Carousel2} alt="..." />
            <img className="w-full object-cover" src={Carousel3} alt="..." />
            <img className="w-full object-cover" src={Carousel4} alt="..." />
            <img className="w-full object-cover" src={Carousel5} alt="..." />
            <img className="w-full object-cover" src={Carousel6} alt="..." />
            <img className="w-full object-cover" src={Carousel7} alt="..." />
            <img className="w-full object-cover" src={Carousel8} alt="..." />
          </Carousel>
        </div>
      </div>

      <div className="p-10 px-40">
        <h1 className="text-3xl font-bold text-grey">The moon</h1>
        <p className="text-sm text-grey">Nusa Penida, Indonesia</p>
        <div className="flex items-center mt-4">
          <div className="flex gap-2 text-sm text-green-500">
            {/* Stars go here */}
            <span>4.5</span>
          </div>
          <div className="text-sm text-gray-600 ml-4">1,599 reviews</div>
        </div>
        <p className="mt-4">
          Kelingking Beach dazzles with its stunning cliff formations,
          powder-white sand, and blue-green sea...
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {/* Tags go here */}
          <h1 className="font-bold">
            Embark on the Ultimate Lunar Adventure with Orbit Odyssey!
          </h1>
          <p>
            Have you ever dreamed of leaving the bounds of Earth to explore the
            celestial wonders above? Orbit Odyssey is turning those dreams into
            reality. Join us for an unparalleled journey to the Moon Earth s
            closest companion in the vast expanse of space.
          </p>

          <h1 className="font-bold">Why the Moon?</h1>
          <p>
            The Moon has captivated human imagination for centuries, a symbol of
            aspiration, mystery, and exploration. Now, it is not just a dream or
            a point in the night sky – it is a destination. Experience the
            thrill of low gravity, witness Earthrise from the lunar surface, and
            leave your footprints on untouched lunar soil.
          </p>

          <h1 className="font-bold">Your Journey:</h1>
          <p>
            Our lunar vacations are more than just travel; they are a leap into
            the future. From the moment you board our state-of-the-art
            spacecraft, every detail is designed for your comfort and safety.
            Enjoy the breathtaking views of space and the Moon, and prepare
            yourself for an adventure like no other.
          </p>

          <h1 className="font-bold">What is Included:</h1>
          <p>
            Luxurious Space Travel: Experience the comfort of our fully equipped
            spacecraft, designed for the ultimate travel experience. Lunar
            Accommodations: Spend your nights in our exclusive lunar habitats,
            with all the comforts of home and a view unlike any other.
            Customized Itineraries: Whether you re interested in lunar hikes,
            driving a moon rover, or visiting historic Apollo landing sites, we
            have something for everyone. Safety and Training: Comprehensive
            pre-flight training and a dedicated crew will ensure your journey is
            safe and enjoyable.
          </p>
          <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Physical activity
          </span>
          {/* More tags */}
        </div>
      </div>
    </>
  );
};

export default Trips;
