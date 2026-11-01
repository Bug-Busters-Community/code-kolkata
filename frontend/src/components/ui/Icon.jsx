import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBox,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiCode,
  FiCompass,
  FiCpu,
  FiLayers,
  FiLock,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPenTool,
  FiSend,
  FiTerminal,
  FiUser,
  FiUsers,
  FiVolume2,
  FiVolumeX,
  FiX,
  FiZap,
} from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ICONS = {
  arrowRight: FiArrowRight,
  arrowUpRight: FiArrowUpRight,
  award: FiAward,
  box: FiBox,
  calendar: FiCalendar,
  check: FiCheck,
  chevronDown: FiChevronDown,
  chevronRight: FiChevronRight,
  clock: FiClock,
  code: FiCode,
  compass: FiCompass,
  cpu: FiCpu,
  layers: FiLayers,
  lock: FiLock,
  mail: FiMail,
  mapPin: FiMapPin,
  menu: FiMenu,
  pen: FiPenTool,
  send: FiSend,
  spark: FiZap,
  terminal: FiTerminal,
  user: FiUser,
  users: FiUsers,
  volume: FiVolume2,
  volumeOff: FiVolumeX,
  close: FiX,
};

const SOCIALS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
};

export function Icon({ name, size = 20, className = "", ...rest }) {
  const Component = ICONS[name] ?? FiZap;
  return <Component aria-hidden="true" focusable="false" size={size} className={className} {...rest} />;
}

export function SocialIcon({ name, size = 18, className = "", ...rest }) {
  const Component = SOCIALS[name] ?? FiCompass;
  return <Component aria-hidden="true" focusable="false" size={size} className={className} {...rest} />;
}
