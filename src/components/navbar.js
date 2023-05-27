import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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

export default function navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
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
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                              {item.list && item.list.length > 0 ? (
                                <Menu.Button className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                  <div>{item.name}</div>
                                </Menu.Button>
                              ) : (
                                <Link to={item.href}>{item.name}</Link>
                              )}
                            </div>
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
