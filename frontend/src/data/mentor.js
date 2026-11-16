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
import aadityaPhoto from "../assets/pics/AADITYA_GUPTA.jpg";

const mentors = [
  {
    name: "Anindita Bhowmick",
    role: "Judge",
    initials: "AB",
    photo: ananditaPhoto,
    currentCompany: "Anibotix Robotics",
    designation: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/anindita-bhowmick-387449395",
    instagram: "",
    other: ""
  },
  {
    name: "Kousik Sen",
    role: "Judge",
    initials: "KS",
    photo: "https://media.licdn.com/dms/image/v2/C5603AQE-TET3XbJqZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517483608440?e=1796256000&v=beta&t=ic-WCSqRQ9Udf11nkF1oAkFr4Q1oHau2cKfJ9WwHlmw",
    currentCompany: "Anibotix Robotics",
    designation: "Chief Adviser",
    linkedin: "https://www.linkedin.com/in/kousik-sen-6449186b",
    instagram: "",
    other: ""
  },
  {
    name: "Vishal Nandy",
    role: "Judge",
    initials: "VN",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQHHfRGJ7tCUcA/profile-displayphoto-crop_800_800/B4DaHeIsr1JMAI-/0/1794728186678?e=1796256000&v=beta&t=pG_EEPE8lLBAtKDvkCFgOkK64Zd30tEuGqeBt9UZNck",
    currentCompany: "Core Platform",
    designation: "Founder",
    linkedin: "https://www.linkedin.com/in/vishal-nandy-7a04a427b",
    instagram: "",
    other: ""
  },
  {
    name: "Dhrubojyoti Chakraborty",
    role: "Guest Speaker",
    initials: "DC",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFMH6FwwpW1kQ/profile-displayphoto-crop_800_800/B56ZmG8p7BJ0AQ-/0/1758905672884?e=1796256000&v=beta&t=KPz48iLZ6Zg-79XMXxp-2USSMLBboShxubv8tvqYNJg",
    currentCompany: "Amazon Web Services (AWS)",
    designation: "Student Builder Campus Leader",
    linkedin: "https://www.linkedin.com/in/dhrubojyoti-chakraborty-567857257/",
    instagram: "",
    other: ""
  },
  {
    name: "Sounak Mandal",
    role: "Mentor",
    initials: "SM",
    photo: sounakPhoto,
    currentCompany: "Anibotix Robotics",
    designation: "Head of Robotics Instructor",
    linkedin: "https://www.linkedin.com/in/sounak-kumar-mondal-2660b7314",
    instagram: "",
    other: ""
  },
  {
    name: "Aaditya Gupta",
    role: "Co-Mentor",
    initials: "AG",
    photo: aadityaPhoto,
    currentCompany: "Anibotix Robotics",
    designation: "Community Manager",
    linkedin: "https://www.linkedin.com/in/aaditya-gupta-ag6",
    instagram: "",
    other: ""
  }
];

export default mentors;
