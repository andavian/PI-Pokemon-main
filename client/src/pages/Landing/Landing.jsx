import { Link } from "react-router-dom";
import landing from "../../img/Landing.jpg";
import logoByN from "../../img/logobyn.png";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoByN} alt="" width={500} />
      <img className={styles.img} src={landing} alt="" />

      <div className={styles.container2}>
        <Link className={styles.link} to="/home">
          <button className={styles.btn}>Enter</button>
        </Link>
      </div>
      <div className={styles.text}>
        <h1>Welcome to my Project (IP) about Pokémon.</h1>
        <p>Open the pokeball and find out...</p>
      </div>
    </div>
  );
};

export default Landing;
