import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBox,
  FiCalendar,
  FiCamera,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiCode,
  FiCoffee,
  FiCompass,
  FiCpu,
  FiLayers,
  FiLock,
  FiLogIn,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMic,
  FiMoon,
  FiPenTool,
  FiPlay,
  FiSend,
  FiSun,
  FiUsers,
  FiVolume2,
  FiVolumeX,
  FiX,
  FiZap,
} from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const ICONS = {
  arrowRight: FiArrowRight,
  arrowUpRight: FiArrowUpRight,
  award: FiAward,
  box: FiBox,
  calendar: FiCalendar,
  camera: FiCamera,
  check: FiCheck,
  chevronDown: FiChevronDown,
  clock: FiClock,
  code: FiCode,
  coffee: FiCoffee,
  compass: FiCompass,
  cpu: FiCpu,
  game: FiPlay,
  layers: FiLayers,
  lock: FiLock,
  login: FiLogIn,
  mail: FiMail,
  mapPin: FiMapPin,
  menu: FiMenu,
  mic: FiMic,
  moon: FiMoon,
  pen: FiPenTool,
  send: FiSend,
  spark: FiZap,
  sun: FiSun,
  users: FiUsers,
  volume: FiVolume2,
  volumeOff: FiVolumeX,
  close: FiX,
};

const SOCIALS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
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
