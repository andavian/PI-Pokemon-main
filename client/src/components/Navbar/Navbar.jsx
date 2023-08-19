import { Link, useLocation } from "react-router-dom";
import logo from "../../img/Logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className={styles.container}>
      <Link to="/home">
        <img src={logo} alt="logo" width={200} />
      </Link>
      <div>
        <Link to="/detail">
          <button className={styles.navbutton}>DETAIL</button>
        </Link>
        <Link to="/form">
          <button className={styles.navbutton}>FORM</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
