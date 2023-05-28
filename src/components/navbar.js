import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "Profil",
    href: "/profil",
    current: false,
    list: [
      { linkName: "Sejarah", href: "/profil/sejarah" },
      { linkName: "Visi dan Misi", href: "/profil/visi-Misi" },
      { linkName: "Tujuan", href: "/profil/Tujuan" },
      { linkName: "Sasaran", href: "/profil/Sasaran" },
      { linkName: "Strategi", href: "/profil/Strategi" },
      { linkName: "Akreditasi", href: "/profil/Akreditasi" },
      { linkName: "People", href: "/profil/people" },
    ],
  },
  {
    name: "Akademik",
    href: "/akademik",
    current: false,
    list: [
      { linkName: "Kurikulum", href: "/akademik/Kurikulum" },
      { linkName: "Jadwal Kuliah", href: "/akademik/Jadwal-Kuliah" },
      { linkName: "Kalender Akademik", href: "/akademik/Kalender-Akademik" },
    ],
  },
  {
    name: "Galeri",
    href: "/galeri",
    current: false,
    list: [
      { linkName: "Foto", href: "/galeri/foto" },
      { linkName: "Video", href: "/galeri/video" },
      { linkName: "Virtual Tour", href: "/galeri/virtual-tour" },
    ],
  },
  {
    name: "Kemahasiswaan",
    href: "/kemahasiswaan",
    current: false,
  },
  {
    name: "Layanan",
    href: "/layanan",
    current: false,
  },
  {
    name: "Kontak",
    href: "/kontak",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <span className="text-white font-semibold text-lg">
                      <HomeIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Menu
                        as="div"
                        key={item.name}
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              {item.list && item.list.length > 0 ? (
                                <span>{item.name}</span>
                              ) : (
                                <Link to={item.href}>{item.name}</Link>
                              )}
                            </span>
                          </Menu.Button>
                        </div>
                        {item.list && item.list.length > 0 && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {item.list.map((i) => (
                                <Menu.Item key={i.linkName}>
                                  {({ active }) => (
                                    <Link
                                      exact
                                      to={i.href}
                                      activeClassName="bg-gray-100"
                                      className="block px-4 py-2 text-sm text-gray-700"
                                    >
                                      {i.linkName}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        )}
                      </Menu>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          {/* mobile navbar */}

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {item.list && item.list.length > 0 ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              open
                                ? "text-gray-300"
                                : "text-gray-400 hover:bg-gray-700 hover:text-white",
                              "flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            )}
                          >
                            <span className="rounded-md px-3 py-2 text-sm font-medium">
                              {item.name}
                            </span>
                            <svg
                              className={`ml-2 h-5 w-5 ${
                                open ? "text-white" : "text-gray-400"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Disclosure.Panel className="px-4 py-2 space-y-2">
                              {item.list.map((i) => (
                                <Link
                                  key={i.linkName}
                                  exact
                                  to={i.href}
                                  activeClassName="bg-gray-100"
                                  className="block px-2 py-1 text-base font-medium rounded-md text-gray-700 hover:bg-gray-100"
                                >
                                  {i.linkName}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
