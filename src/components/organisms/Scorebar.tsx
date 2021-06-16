
import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { useGame } from "context/game.context";
import styles from "./Scorebar.scss";

const Scorebar: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const { score } = useGame();

  useEffect(() => {
    setAnimate(true);
  }, [score]);

  return (
    <div className={styles.container}>
      <span className={styles.score}>Score</span>
      <span
        data-test-id="txt-score"
        className={classnames(styles.scoreValue, {
          [`animate__animated animate__flash`]: animate,
        })}
        onAnimationEnd={() => setAnimate(false)}
      >
        {score}
      </span>
    </div>
  );
};

export default Scorebar;
