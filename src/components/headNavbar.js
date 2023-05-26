import React from "react";

const smallNavbar = [
  { name: "UNRI Official", href: "/" },
  { name: "Webmail UNRI", href: "/" },
  { name: "UNRI News", href: "/" },
  { name: "BITS", href: "/" },
];

const headNavbar = () => {
  return (
    <>
      <div className="bg-[#000D18] h-8 w-full">
        <div className="flex space-x-4 ml-3 items-center p-1">
          {smallNavbar.map((item) => (
            <li
              key={item.name}
              className="text-gray-300 hover:text-gray-50 list-none font-medium text-sm "
            >
              {item.name}
            </li>
          ))}
          <div className="flex">
            <img src="/asset/images/id.png" alt="id" />
            <li className="text-gray-300 hover:text-gray-50 list-none font-medium text-sm ml-2">
              ID
            </li>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 h-[80px] flex justify-between items-center">
        <div className="flex gap-3 justify-between items-center">
          <img
            src="/asset/images/LOGO-UR-TERBARU.PNG"
            alt="logo unri"
            className="h-16 ml-5 "
          />
          <div className="text-white font-semibold">
            <p>TEKNIK INFORMATIKA</p>
            <p>Universitas Riau</p>
          </div>
        </div>

        <form className=" mr-10">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative w-auto">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-[300px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos... "
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default headNavbar;
