import React from "react";
import logo from "../../public/assets/logo.svg";
import menuIcon from "../../public/assets/menuIcon.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1B1628] fixed top-0 w-full">
      <Link href="/">
        <img src={logo.src} alt="LOGOTIPO" className="h-14" />
      </Link>
      <img src={menuIcon.src} alt="MENU" className="h-10" />
    </header>
  );
};

export default Header;
