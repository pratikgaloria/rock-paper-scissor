import React from "react";
import classnames from "classnames";

import styles from "./Game.scss";
import TriangleImage from "components/images/TriangleImage";
import PodButton from "components/atoms/PodButton";
import Button from "components/atoms/Button";
import { useGame } from "context/game.context";
import { podTypes } from "enums/podType.enum";

const Game: React.FC = () => {
  const { userPicked, onPick, housePicked, userWon } = useGame();

  return userPicked && housePicked ? (
    <div className={styles.game}>
      <div className={styles.gamePadButton}>
        <span>You picked</span>
        <PodButton
          type={userPicked}
          className={styles.icon}
          ripples={userWon}
        ></PodButton>
      </div>
      <div className={styles.gameResult}>
        <span
          className={classnames(
            "animate__animated",
            `animate__${userWon ? "tada" : "shakeX"}`
          )}
        >
          You {userWon ? "Win" : "Lose"}
        </span>
        <Button onClick={() => onPick(undefined)}>Play again</Button>
      </div>
      <div className={styles.gamePadButton}>
        <span>The house picked</span>
        <PodButton
          type={housePicked}
          className={styles.icon}
          ripples={!userWon}
        ></PodButton>
      </div>
    </div>
  ) : (
    <div className={styles.initial}>
      <div className={styles.initialTriangle}>
        <TriangleImage />
      </div>
      {podTypes.map((t, i) => (
        <PodButton
          key={t}
          type={t}
          className={classnames(styles.icon, styles[`icon-${i + 1}`])}
          onClick={() => onPick(t)}
        />
      ))}
    </div>
  );
};

export default Game;
