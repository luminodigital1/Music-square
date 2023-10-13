import { Link } from "react-router-dom";
import "../../Shared/Header/Header.css";

const navLinks = [
  {
    linkText: "Find Artists",
    linkTo: "/find-artists",
  },
  {
    linkText: "Find Collabs",
    linkTo: "/find-collabs",
  },
  {
    linkText: "Post Collabs",
    linkTo: "/post-collabs",
  },
  {
    linkText: "How it works",
    linkTo: "/how-it-works",
  },
];

const CollabStatusPageHeader = () => {
  return (
    <div className="header__container">
      {/* Left */}
      <div className="left__container">
        <img src="/shared/header__logo.png" alt="logo" />
      </div>
      {/* Middle */}
      <div className="middle__container">
        {navLinks.map((item, index) => (
          <Link to={item.linkTo} key={index}>
            {item.linkText}
          </Link>
        ))}
      </div>
      {/* Right */}
      <div className="right__container">
        <img src="/shared/header__sms.png" alt="logo" />
        <img src="/shared/header__notification.png" alt="logo" />
        <img src="/shared/header__profile.png" alt="logo" />
      </div>
    </div>
  );
};

export default CollabStatusPageHeader;