import React from "react";

import styles from "./Header.scss";
import LogoImage from "../images/LogoImage";
import Scorebar from "./Scorebar";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <LogoImage />
      <Scorebar />
    </div>
  );
};

export default Header;
