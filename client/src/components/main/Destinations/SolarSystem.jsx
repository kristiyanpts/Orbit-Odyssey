// import hero from "../../../assets/hero-background.png";
import { NavLink } from "react-router-dom";

const SolarSystem = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 box-border bg-transparent">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center">
          Solar System
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <NavLink to="/trips">
                <img
                  src="https://media.discordapp.net/attachments/1219606643730419812/1224311940734517348/file-BaxkZiku7mnNUwrfYZtAiMgB.png?ex=661d0859&is=660a9359&hm=70036060111bee6dcaf8b456193ea20eec4a2b7a616c1a5fd0d9a1266f98864d&=&format=webp&quality=lossless&width=687&height=392"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </NavLink>
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">The Moon</h1>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224312462304608276/file-YAwIUm85xlPn56HKJc5yaI2W.png?ex=661d08d5&is=660a93d5&hm=796edb2b92a166f9bef6e3d5b9c5cd2825d04fcbc2c040d13010aecf88fc6148&=&format=webp&quality=lossless&width=1040&height=593"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Mars</h1>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224312919001665636/file-LUDMp9U3Ad6aDhR3h9aLkGyX.png?ex=661d0942&is=660a9442&hm=659ed569178c88e1185242359b4674d71447cc4f2937b7d5b1b09f6fc6307f2e&=&format=webp&quality=lossless&width=1040&height=593"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Titan</h1>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224313535417417738/file-twX91x4cqUvVT6GC2WnYOpgL.png?ex=661d09d5&is=660a94d5&hm=8d0419e2b44823eefda6344cfaf249611828238c0856a133694bb4448c02fd1c&=&format=webp&quality=lossless&width=687&height=392"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Europa</h1>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224314125342216282/file-Qwp4ZTOdQjKSzfyfTtaLm9wG.png?ex=661d0a62&is=660a9562&hm=c0255a49d71b04e8786ba5afa6be35a754dfe02ea2bc43c4f9fd3b6bf7ac7006&=&format=webp&quality=lossless&width=1040&height=593"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Saturn</h1>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224315375530016830/file-uDsFmzH1MNOTlArUQCI1omHG.png?ex=661d0b8c&is=660a968c&hm=a59ec5a3a64d6819580a9572a384f91846f0a3715a25043aa39fa70b2916c2ae&=&format=webp&quality=lossless&width=1040&height=593"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Venus</h1>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224316673759121532/file-EllgHAx1BLJwkuaeFUQw7KwL.png?ex=661d0cc1&is=660a97c1&hm=4f106cdabcc48ecdbd91455074fd7254ff6ac533ced54394ed5fb9a021fba514&=&format=webp&quality=lossless&width=687&height=392"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Enceladus</h1>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224316849395859497/file-sWu1vqn721xYcW1Q7xlmcXW8.png?ex=661d0ceb&is=660a97eb&hm=4f6f27a4aef23b205814c7296f78ab8d9da962dbf0afd98ba3c3ce3ffdf637ff&=&format=webp&quality=lossless&width=1040&height=593"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">
                Asteroid Belt
              </h1>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://media.discordapp.net/attachments/1219606643730419812/1224318162657476678/file-hmzfW1iic6xikRsmV9TmIHwo.png?ex=661d0e24&is=660a9924&hm=e076b59f6cb647dfad7365b6e0ba1df2e544fcef1a1dbc86feec6cc3652cea4b&=&format=webp&quality=lossless&width=687&height=392"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-center text-3xl font-semibold">Io</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
