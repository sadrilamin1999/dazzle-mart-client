"use client";

import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import Button from "./Button";
import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={getTransition(0.6)}
      className="h-20 fixed top-0 left-0 right-0 bg-light/90 backdrop-blur-lg border-b border-dark-10"
    >
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* Nav left */}
        <nav>
          <Link href="/" className=" text-xl font-semibold link-item">
            Dazzle Mart
          </Link>
        </nav>
        {/* Nav mid */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Nav right */}
        <nav className="flex items-center gap-5">
          <Link href="/cart" className="relative">
            <BsBag />
            <span className=" absolute text-xs w-4 h-4 rounded-full bg-rose-500 text-light flex justify-center items-center -right-2 -bottom-2">
              10
            </span>
          </Link>
          <Button href="/login" placeholder="Login" color="green" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
