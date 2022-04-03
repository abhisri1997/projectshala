import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const social_icons = [
  {
    id: 1,
    type: "Facebook",
    library: <FaFacebookF className="icon" />,
    url: "https://facebook.com/abhishree143",
  },
  {
    id: 2,
    type: "Twitter",
    library: <FaTwitter className="icon" />,
    url: "https://twitter.com/abhisri1997",
  },
  {
    id: 3,
    type: "GitHub",
    library: <FaGithub className="icon" />,
    url: "https://github.com/dev-elixir",
  },
  {
    id: 4,
    type: "LinkedIN",
    library: <FaLinkedinIn className="icon" />,
    url: "https://www.linkedin.com/in/abhisri1997/",
  },
];

export default social_icons;
