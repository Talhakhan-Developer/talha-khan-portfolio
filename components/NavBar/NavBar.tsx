import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const NavBar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("/");

  const handleClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    function scrollHeader() {
      setTab(window.location.hash);

      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollHeader);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen bg-[#eeeeee] h-nav ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[85%] min-h-full mx-auto flex justify-between items-center">
        <h1 className="font-poppin text-[20px] font-semibold text-primary">
          Talha Khan.
        </h1>
        {/* navigation menu for tablet and desktop devices*/}
        <ul className="hidden justify-between items-center gap-4 font-semibold text-nav font-poppin text-dark transition md:flex">
          <li>
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a className="hover:text-primary">About me</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Services</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Project&apos;s</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Contact</a>
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <button onClick={handleClick} className="block md:hidden">
          <Image src="/icons/hamburger.svg" alt="" width={20} height={20} />
        </button>

        {/* Navigation Menu for mobile */}
        <ul
          className={`absolute ${
            isNavOpen ? "right-0" : "right-[-100%]"
          } top-0 w-[90%] h-[100vh] bg-white flex flex-col justify-center gap-8 items-center font-semibold text-nav rounded-tl-2xl rounded-bl-2xl shadow-2xl font-poppin text-dark transition md:hidden`}
        >
          <button onClick={handleClick} className="absolute top-7 right-8">
            <Image
              className="relative "
              src="/icons/cross.svg"
              alt=""
              width={15}
              height={15}
            />
          </button>
          <li>
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a className="hover:text-primary">About me</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Services</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Project&apos;s</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-primary">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
