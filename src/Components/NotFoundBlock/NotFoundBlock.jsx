import React from "react";
import error from "../../Assets/img/404.webp";
import styles from './NotFound.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h2>Error 404 - All Records Expunged from Library</h2>
        <p>
          Sorry, the page you are looking for does not exist or it may never
          have existed. Not to worry, just click on the logo to return to the
          homepage.
        </p>
      </div>
      <div className={styles.imgBlock}>
        <img src={error} alt="404 error" />
      </div>
    </div>
  );
};

export default NotFoundBlock;
