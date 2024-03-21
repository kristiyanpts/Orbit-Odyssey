"use client";

import hero from "../../assets/hero-background.png";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="relative h-full">
      <div className="flex flex-col items-start justify-center pl-20 text-white z-0 relative w-full box-border h-[calc(100vh-5rem)]">
        <h1 className="text-5xl font-bold uppercase mb-4">
          Discover the unknown
        </h1>
        <p className="max-w-md mb-8">Beyond Boundaries, Beyond Imagination</p>
        <p className="max-w-md mb-8">
          Innovation | Inspiration | Accessibility | Safety | Environmental
          Responsibility
        </p>
        <p className="max-w-md mb-8">
          Join the Pioneers Redefining Travel — Where Every Star Is Just the
          Beginning
        </p>

        <button
          className="rounded-2xl text-white hover:scale-105 font-bold uppercase border border-solid hover:shadow-gray-300 hover:shadow-md border-white-600 text-sm px-6 py-3 shadow  outline-none focus:outline-none mr-4 ease-linear transition-all duration-150 mb-5 box-border"
          type="button"
        >
          Learn more
        </button>
        <button
          className="rounded-2xl text-white-600 hover:scale-105 bg-transparent border border-solid border-white-600 hover:shadow-md hover:shadow-gray-300 hover:text-white font-bold uppercase text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 box-border"
          type="button"
        >
          Get started
        </button>
        <img
          src={hero}
          alt="Background"
          className="absolute w-full h-full -z-10 left-0 object-cover"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 box-border bg-transparent">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
          Top offers
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={hero}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={hero}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={hero}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={hero}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center text-white p-8 h-screen bg-[#1B1A1D]">
        <div className="w-1/3 space-y-6">
          <h1 className="text-6xl font-bold">YOUR COMMUNITY AWAITS</h1>
          <p className="text-lg">
            Star Citizen is currently in the ‘Alpha’ stage of development, being
            created in partnership with a passionate, knowledgeable, and
            always-welcoming community.
          </p>
          <p className="text-lg">
            Each update to the game adds new features, technology, and gameplay
            that grow and evolve together with our key development partners –
            the players.
          </p>
          <p className="text-lg">
            From learning the ropes to tackling new threats together, help is
            always at hand. Explore the ‘verse now and play your part in its
            evolution!
          </p>
        </div>
        <div className="w-2/3 relative">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img src={hero} alt="..." />
              <img src={hero} alt="..." />
              <img src={hero} alt="..." />
              <img src={hero} alt="..." />
              <img src={hero} alt="..." />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
