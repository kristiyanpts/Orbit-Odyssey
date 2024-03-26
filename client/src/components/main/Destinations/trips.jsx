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
    <div className="container mx-auto">
      <div className="bg-cover bg-center h-96">
        <div className="aspect-video">
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

      <div className="p-6">
        <h1 className="text-3xl font-bold">Kelingking Beach</h1>
        <p className="text-sm text-gray-500">Nusa Penida, Indonesia</p>
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
          <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Physical activity
          </span>
          {/* More tags */}
        </div>
      </div>
    </div>
  );
};

export default Trips;
