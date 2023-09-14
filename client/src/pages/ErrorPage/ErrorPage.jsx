import { Link } from "react-router-dom";
import styles from "./errorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>
        <span className={styles.errorCode}>404</span>
        <p className={styles.text}>PAGE NOT FOUND</p>
        <Link to="/home" className={styles.link}>
          <p className={styles.hmpg}>Back To Home</p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
