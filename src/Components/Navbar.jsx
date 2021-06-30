import Scroll from "react-scroll";

let Link = Scroll.Link;

export default function Navbar() {
  return (
    <div className="nav_box">
      <div className="nav_logobox">
        <h1>
          <Link to="About" offset={-230} duration={500}>
            KIM jong won
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="gnb">
          <li>
            <Link to="About" offset={-230} duration={500} className="nav_link">
              About
            </Link>
          </li>
          <li>
            <Link to="Works" offset={-100} duration={500} className="nav_link">
              Works
            </Link>
          </li>
          <li>
            <Link to="Skills" offset={-100} duration={500} className="nav_link">
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              offset={-100}
              duration={500}
              className="nav_link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
