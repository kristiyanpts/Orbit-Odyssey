import hero from "../../../assets/hero-background.png";

const MilkyWay = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 box-border bg-transparent">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
          Milky Way
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={hero}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Earth</h1>
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

            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Earth</h1>
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
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Earth</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-full h-full relative">
  );
};

export default MilkyWay;
