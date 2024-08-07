"use client";
import { useRef, useState } from "react";
import "./hamburger.css";
import { FaAddressCard, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";
import { TransitionLink } from "@/utils/TransitionLink";
const Navbar = () => {
  const hamburger = useRef<HTMLInputElement>(null);

  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleLinkClick = () => {
    setVisible(false);
    if (hamburger.current) {
      hamburger.current.checked = false;
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0  w-full px-4 z-4 flex justify-between items-center lg:px-20 z-40 bg-white"
    >
      <TransitionLink
        href="/"
        className="flex justify-center items-center p-4 gap-4 z-50"
      >
        <Image
          src="/img/logo.png"
          alt="Logo Lunaris Web"
          width={70}
          height={70}
        />
        <h2
          className={`whitespace-nowrap text-2xl md:text-4xl font-[800] mt-[5px] transition-color duration-150 ${
            visible ? "text-white" : "text-black"
          }`}
        >
          Lunaris Web
        </h2>
      </TransitionLink>
      <label className="flex lg:hidden z-50">
        <input
          ref={hamburger}
          type="checkbox"
          id="check"
          onClick={(e: any) => {
            e.target.checked ? setVisible(true) : setVisible(false);
          }}
          className="hidden"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div
        onClick={handleLinkClick}
        className={`fixed top-0 right-0 h-screen w-screen bg-black pt-32 bg-opacity-90 border-l-2 border-white transition-all duration-1000 origin-right ease-in-out
        ${visible ? "scale-x-1" : "scale-x-0"}
      `}
      >
        <ul className="flex flex-col justify-center items-center gap-8 text-xl font-bold text-white">
          <li>
            <TransitionLink href="/">Strona Główna</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/omnie">O Mnie</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/uslugi">Oferta</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/portfolio">Portfolio</TransitionLink>
          </li>

          <li>
            <TransitionLink href="/blog">Blog</TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/kontakt"
              className="p-4 px-6 bg-white text-black rounded-lg font-bold"
            >
              Porozmawiajmy!
            </TransitionLink>
          </li>
          <li className="w-48 border-b-2 border-white my-6"></li>
          <li className="flex gap-8">
            <TransitionLink
              href="https://www.facebook.com/LunarisWeb?locale=pl_PL"
              className="text-5xl active:text-primary"
            >
              <FaInstagram />
            </TransitionLink>
            <TransitionLink
              href="https://www.instagram.com/lunarisweb.pl/"
              className="text-5xl active:text-primary"
            >
              <FaFacebook />
            </TransitionLink>
          </li>
        </ul>
      </div>

      <ul className="hidden lg:flex gap-8 items-center font-[500] justify-center text-black">
        <li>
          <TransitionLink href="/" className="hover:underline">
            Strona Główna
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/omnie" className="hover:underline">
            O Mnie
          </TransitionLink>
        </li>
        <StaggeredDropDown />
        <li>
          <TransitionLink href="/portfolio" className="hover:underline">
            Portfolio
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/blog" className="hover:underline">
            Blog
          </TransitionLink>
        </li>

        <li>
          <TransitionLink
            href="/kontakt"
            className="p-4 px-6 bg-black text-white rounded-lg font-bold"
          >
            Porozmawiajmy!
          </TransitionLink>
        </li>
      </ul>

      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-base to-transparent w-full h-[1px]"></div>
    </motion.nav>
  );
};

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.li animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2"
      >
        <p>Usługi</p>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-60 overflow-hidden z-20"
      >
        <Option
          setOpen={setOpen}
          link="strony-internetowe"
          Icon={MdOutlineWeb}
          text="Strony Internetowe"
        />
        <Option
          setOpen={setOpen}
          link="logotypy"
          Icon={PiPencilCircle}
          text="Logotypy"
        />
        <Option
          setOpen={setOpen}
          link="grafika-komputerowa"
          Icon={FaAddressCard}
          text="Grafika Komputerowa"
        />
      </motion.ul>
    </motion.li>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  link,
}: {
  text: string;
  Icon: any;
  setOpen: any;
  link: any;
}) => {
  return (
    <motion.li variants={itemVariants} onClick={() => setOpen(false)}>
      <TransitionLink
        href={"/uslugi/" + link}
        className="flex items-center justify-start gap-2 w-full p-2 whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-primary transition-colors cursor-pointer"
      >
        <motion.p variants={actionIconVariants} className="text-xl">
          <Icon />
        </motion.p>
        <p>{text}</p>
      </TransitionLink>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default Navbar;
