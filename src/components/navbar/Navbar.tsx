import React from "react";
import "../../styles/navbar.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Search from "./Search";
import PostingButtons from "./PostingButtons";

const Navbar = () => {
  return (
    <div>
      <div className="nav--box">
        <div className="logo--box">
          <Link href="./" passHref>
            <Image src={logo} alt="logo" className="logo" width={20} height={20}/>
          </Link>
          <div className="logo--text"> Homes.io</div>
        </div>
        <Search />
        <PostingButtons />
      </div>
    </div>
  );
};

export default Navbar;
