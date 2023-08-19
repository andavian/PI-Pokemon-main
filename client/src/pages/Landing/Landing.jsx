import { Link } from "react-router-dom";
import landing from "../../img/Landing.jpg";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={landing} alt="" />

      <div className={styles.container2}>
        <Link className={styles.link} to="/home">
          <button className={styles.btn}>Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
