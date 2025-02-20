import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener untuk mengubah state saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar fixed top-0 left-0 z-[999] w-full px-40 py-5 transition-all ease-in-out duration-300 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-5 text-gray-800 font-primary font-semibold tracking-[.15em]">
          <li>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#product"
              onClick={(e) => handleLinkClick(e, "product")}
              className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full"
            >
              PRODUCTS
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={(e) => handleLinkClick(e, "gallery")}
              className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full"
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="relative ml-5 bg-amber-400 text-white after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:bg-amber-500 hover:after:w-full"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
