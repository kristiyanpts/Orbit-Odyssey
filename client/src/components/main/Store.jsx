import { Slider, TablePagination } from "@mui/material";
import { useState } from "react";

const Store = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePrice = (e, newValue) => {
    setPriceRange(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="relative w-full h-fit p-8 box-border flex flex-col gap-6">
        <div className="relative w-full text-center text-4xl font-bold">
          Top #5 Best Sellers
        </div>
        <div className="flex gap-4 justify-center w-full overflow-x-auto">
          <a
            className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
            href=""
          >
            <img
              src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
              alt=""
              className="rounded w-48"
            />
            <div className="font-bold text-xl">Black T-Shirt</div>
            <div>$50,00</div>

            <div className="absolute right-0 top-0 bg-green-400 rounded-bl-sm px-3 shadow-lg">
              #1 Most Bought
            </div>
            <div className="absolute left-0 top-0 bg-red-400 rounded-br-sm px-3 shadow-lg text-sm">
              HOT DEAL!
            </div>
          </a>
          <a
            className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
            href=""
          >
            <img
              src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
              alt=""
              className="rounded w-48"
            />
            <div className="font-bold text-xl">Black T-Shirt</div>
            <div>$50,00</div>

            <div className="absolute right-0 top-0 bg-green-400 rounded-bl-sm px-3 shadow-lg">
              #2 Most Bought
            </div>
          </a>
          <a
            className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
            href=""
          >
            <img
              src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
              alt=""
              className="rounded w-48"
            />
            <div className="font-bold text-xl">Black T-Shirt</div>
            <div>$50,00</div>

            <div className="absolute right-0 top-0 bg-green-400 rounded-bl-sm px-3 shadow-lg">
              #3 Most Bought
            </div>
            <div className="absolute left-0 top-0 bg-red-400 rounded-br-sm px-3 shadow-lg text-sm">
              HOT DEAL!
            </div>
          </a>
          <a
            className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
            href=""
          >
            <img
              src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
              alt=""
              className="rounded w-48"
            />
            <div className="font-bold text-xl">Black T-Shirt</div>
            <div>$50,00</div>

            <div className="absolute right-0 top-0 bg-green-400 rounded-bl-sm px-3 shadow-lg">
              #4 Most Bought
            </div>
          </a>
          <a
            className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded group hover:bg-gray-200 transition-all"
            href=""
          >
            <img
              src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
              alt=""
              className="rounded w-48 block"
            />
            <div className="font-bold text-xl">Black T-Shirt</div>
            <div>$50,00</div>

            <div className="absolute right-0 top-0 bg-green-400 rounded-bl-sm px-3 shadow-lg">
              #5 Most Bought
            </div>
          </a>
        </div>
      </div>

      {/* Splitter */}
      <div className="relative w-11/12 h-1 bg-black left-1/2 -translate-x-1/2 rounded text-transparent">
        placeholder
      </div>

      <div className="relative w-full h-fit p-8 box-border flex gap-4">
        {/* Filters */}
        <div className="relative w-1/5 h-full flex flex-col gap-4">
          <div className="relative w-full text-center text-2xl font-bold">
            Filters
          </div>
          <div className="relative w-full flex flex-col gap-2">
            <div className="relative w-full flex flex-col gap-1">
              <div className="relative w-full font-bold text-sm">Price</div>

              <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                min={0}
                max={10000}
              />
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm text-gray-900 dark:text-white font-bold"
              >
                Category
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Size
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Size 1</option>
                <option value="2">Size 2</option>
                <option value="3">Size 3</option>
              </select>
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Color
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Color 1</option>
                <option value="2">Color 2</option>
                <option value="3">Color 3</option>
              </select>
            </div>
            <div className="relative w-full flex flex-col gap-1">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Sorting
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">Sort 1</option>
                <option value="2">Sort 2</option>
                <option value="3">Sort 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative w-full h-fit box-border">
          <div className="relative w-full">
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>

          <div className="relative w-full h-fit box-border grid gap-x-6 gap-y-4 grid-cols-4 xl:gap-x-8 ">
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>

              <div className="absolute left-0 top-0 bg-red-400 rounded-br-sm px-3 shadow-lg text-sm">
                HOT DEAL!
              </div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>

              <div className="absolute left-0 top-0 bg-red-400 rounded-br-sm px-3 shadow-lg text-sm">
                HOT DEAL!
              </div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded hover:bg-gray-200 transition-all overflow-hidden"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded group hover:bg-gray-200 transition-all"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48 block"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded group hover:bg-gray-200 transition-all"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48 block"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded group hover:bg-gray-200 transition-all"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48 block"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
            <a
              className="relative w-72 border-2 border-gray p-5 flex flex-col items-center rounded group hover:bg-gray-200 transition-all"
              href=""
            >
              <img
                src="https://cdn.discordapp.com/attachments/1219606643730419812/1219995580701610004/file-hdjt495ZVm6mtVjRW8mOEILJ.png?ex=660d546c&is=65fadf6c&hm=ca0323083df4c4eb719390b5726434730f6cc345f0bc6a681a87ebf0a135db8c&"
                alt=""
                className="rounded w-48 block"
              />
              <div className="font-bold text-xl">Black T-Shirt</div>
              <div>$50,00</div>
            </a>
          </div>

          <div className="relative w-full">
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
