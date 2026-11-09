/* ============================================================================
   JUDGE & MENTOR ROSTER
   ----------------------------------------------------------------------------
   The MENTOR page reads every profile from this file. To add a portrait, set
   `photo` to a public path (for example "/mentors/anandita.jpg") or to an
   imported asset. Leave it empty to show the initials fallback instead.
   Social icons only render when the matching URL is filled in.
   ========================================================================== */

import ananditaPhoto from "../assets/pics/ANANDITA_BHOWMICK.jpg";
import sounakPhoto from "../assets/pics/SOUNAK_MANDAL.jpg";

const mentors = [
  {
    name: "Anandita Bhowmick",
    role: "Judge",
    initials: "AB",
    photo: ananditaPhoto,
    currentCompany: "Anibotix Robotics",
    designation: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/anindita-bhowmick-387449395?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "",
    other: ""
  },
  {
    name: "Sounak Mandal",
    role: "Mentor",
    initials: "SM",
    photo: sounakPhoto,
    currentCompany: "SAP",
    designation: "System Analyst",
    linkedin: "https://www.linkedin.com/in/sounak-kumar-mondal-2660b7314/",
    instagram: "",
    other: ""
  }
];

export default mentors;
