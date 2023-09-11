import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GiCat } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className=" h-20 flex items-center justify-between">
      <Link href={"/"} className="text-2xl hover:text-teal-500">
        Home
      </Link>

      <ul className="flex gap-5 font-semibold text-2xl">
        <a
          href="https://www.linkedin.com/in/ryan-fadhilah-03146918a/"
          className="hover:text-teal-500"
        >
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a
          href="https://github.com/ryanfadhilah"
          className="hover:text-teal-500"
        >
          <AiFillGithub></AiFillGithub>
        </a>
        <a href="https://twitter.com/rynflh" className="hover:text-teal-500">
          <AiOutlineTwitter></AiOutlineTwitter>
        </a>
        <a
          href="https://final-portfolio-ryanfadhilahacc-gmailcom.vercel.app/"
          className="hover:text-teal-500"
        >
          <GiCat></GiCat>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
