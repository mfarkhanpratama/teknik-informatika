import React from "react";
import { Link } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  // Array of footer links
  const footerLinks = [
    {
      label: "KATEGORI",
      links: [
        { title: "Berita", to: "/berita" },
        { title: "Event", to: "/event" },
        { title: "Prestasi Mahasiswa", to: "/" },
      ],
    },
    {
      label: "TENTANG TI UNRI",
      links: [
        { title: "Sejarah", to: "/" },
        { title: "Visi dan Misi", to: "/" },
        { title: "Tujuan", to: "/" },
        { title: "Sasaran", to: "/" },
        { title: "Strategi", to: "/" },
        { title: "Akreditasi", to: "/" },
      ],
    },
    {
      label: "MENGUNJUNGI UNIVERSITAS RIAU",
      links: [
        { title: "Peta Kampus", to: "/" },
        { title: "Virtual Tour", to: "/" },
        { title: "Lab Jarkom", to: "/" },
        { title: "Lab RPL", to: "/" },
      ],
    },
    {
      label: "PENDAFTARAN",
      links: [
        { title: "SITEI (Akademik)", to: "/" },
        { title: "Beasiswa", to: "/" },
        { title: "Konferensi Internasional", to: "/" },
        { title: "Tracer Study", to: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col justify-center items-center md:justify-start bg-gray-900 px-5 pt-5 pb-9">
            <Link to="/" className="flex items-center text-white">
              <img
                src="/asset/images/logoUnri.png"
                alt="logo"
                className="h-16 w-16"
              />
              <div>
                <p className="font-bold ml-2">Prodi Teknik Informatika</p>
                <p className="font-bold ml-2">Universitas Riau</p>
              </div>
            </Link>

            <div className="flex justify-center mt-8">
              <FiInstagram className="h-6 w-6 text-gray-300 hover:text-white mr-4" />
              <FiFacebook className="h-6 w-6 text-gray-300 hover:text-white mr-4" />
              <FiTwitter className="h-6 w-6 text-gray-300 hover:text-white" />
            </div>

            <div className="flex flex-col justify-start text-white mt-7 text-left font-medium gap-3">
              <p className="text-[#EA821E]">ADDRESS</p>
              <p>
                Gedung C lantai 2 Fakultas Teknik Universitas Riau Kampus
                Binawidya Jl. HR Soebrantas KM. 12.5, Simpang Baru, Binawidya
                Pekanbaru – 28293
              </p>
              <p className="text-[#EA821E]">PHONE</p>
              <p>Telp. 0341-577911</p>
              <p className="text-[#EA821E]">FAX</p>
              <p>Fax (0341) 577-911</p>
              <p className="text-[#EA821E]">EMAIL</p>
              <p>informatika@eng.unri.ac.id</p>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:col-span-2 flex flex-col">
            <div className="mb-12">
              <div className="flex gap-8 flex-col sm:flex-row mx-4 justify-between">
                <img
                  src="/asset/images/akreditasi-ti-b.png"
                  alt="akreditasi"
                  className="sm:h-16  h-full"
                />
                <img
                  src="/asset/images/kampus.png"
                  alt="kampus merdeka"
                  className="sm:h-16  h-full"
                />
                <img
                  src="/asset/images/integritas.png"
                  alt="zona integritas"
                  className="sm:h-16  h-full"
                />
              </div>
              <hr className="border-6 border-[#EA821E] my-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {footerLinks.map((section, index) => (
                <div className="text-white" key={index}>
                  <h3 className="text-sm font-medium">{section.label}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-gray-300 hover:text-white"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-base text-gray-400 md:text-center">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
