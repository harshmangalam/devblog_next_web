import { RiContactsLine, RiHomeLine, RiMic2Line, RiUserLine } from "react-icons/ri";
import {MdSlowMotionVideo} from "react-icons/md"
import {BsTag} from "react-icons/bs"
export const menuLinks = [
  {
    name: "Home",
    href: "/",
    icon: RiHomeLine,
  },

  {
    name: "Podcasts",
    href: "/pod",
    icon: RiMic2Line,
  },

  {
    name: "Videos",
    href: "/videos",
    icon: MdSlowMotionVideo,
  },

  {
    name: "Tags",
    href: "/tags",
    icon: BsTag,
  },

  {
    name: "About",
    href: "/about",
    icon: RiUserLine,
  },

  {
    name: "Contact",
    href: "/contact",
    icon: RiContactsLine,
  },
];
