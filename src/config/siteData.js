import {
  RiContactsLine,
  RiHomeLine,
  RiUserLine,
  RiLoginBoxLine,
  RiUserAddLine,
} from "react-icons/ri";
import { BsTag } from "react-icons/bs";

const menuLinks = [
  {
    name: "Home",
    href: "/",
    icon: RiHomeLine,
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

const authRoutes = [
  {
    name: "Login",
    href: "/auth/login",
    icon: RiLoginBoxLine,
  },

  {
    name: "Create Account",
    href: "/auth/register",
    icon: RiUserAddLine,
  },
];

export { authRoutes, menuLinks };
