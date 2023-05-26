import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
      { linkName: "Sejarah", href: "/" },
      { linkName: "Visi dan Misi", href: "/" },
      { linkName: "Tujuan", href: "/" },
      { linkName: "Sasaran", href: "/" },
      { linkName: "Strategi", href: "/" },
      { linkName: "Dosen", href: "/" },
      { linkName: "Tenaga Pendidikan", href: "/" },
    ],
  },
  {
    name: "Akademik",
    href: "/akademik",
    current: false,
    list: [
      { linkName: "kurikulum", href: "/" },
      { linkName: "Jadwal Kuliah", href: "/" },
      { linkName: "Kalender Akademik", href: "/" },
    ],
  },
  {
    name: "Galeri",
    href: "/galeri",
    current: false,
    list: [
      { linkName: "Foto", href: "/" },
      { linkName: "Video", href: "/" },
      { linkName: "Virtual Tour", href: "/" },
    ],
  },
  {
    name: "Kemahasiswaan",
    href: "/",
    current: false,
  },
  {
    name: "Layanan",
    href: "/",
    current: false,
  },
  {
    name: "Kontak",
    href: "/",
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
                              {item.name}
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
                                    <a
                                      href={i.href}
                                      className={`${
                                        active ? "bg-gray-100" : ""
                                      } block px-4 py-2 text-sm text-gray-700`}
                                    >
                                      {i.linkName}
                                    </a>
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
