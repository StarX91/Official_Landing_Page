import { useState } from 'react';

const Navbarr= () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white py-4">
      <div className="container mx-auto">
        <ul className="flex space-x-8">
          <li className="relative">
            <button
              className="hover:underline"
              
            >
              HOME
            </button>
            {isHomeDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-900 text-white shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home 1</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home 2</li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              className="hover:underline"
              
            >
              ABOUT US
            </button>
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-900 text-white shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Our Team</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Our Story</li>
              </ul>
            )}
          </li>
          <li>
            <a href="#product" className="hover:underline">
              PRODUCT
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:underline">
              GALLERY
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbarr;
