import React, { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

import PodType, { podTypes } from "../enums/podType.enum";

export const hasUserWon = (userPicked: PodType, housePicked: PodType) => {
  if (userPicked === PodType.Paper && housePicked === PodType.Rock) {
    return true;
  } else if (userPicked === PodType.Rock && housePicked === PodType.Scissor) {
    return true;
  } else if (userPicked === PodType.Scissor && housePicked === PodType.Paper) {
    return true;
  }

  return false;
};

interface GameContext {
  score: number;
  userPicked: PodType | undefined;
  housePicked: PodType | undefined;
  userWon: boolean;
  onPick: (type: PodType) => void;
}

const gameContext = React.createContext<GameContext>({
  score: 0,
  userPicked: undefined,
  housePicked: undefined,
  userWon: false,
  onPick: () => {},
});

export const useGame = () => React.useContext(gameContext);

const GameContextProvider = gameContext.Provider;

const GameProvider: React.FC = ({ children }) => {
  const [userPicked, setUserPicked] = useState<PodType | undefined>(undefined);
  const [housePicked, setHousePicked] =
    useState<PodType | undefined>(undefined);
  const [score, setScore] = useLocalStorage<number | undefined>("score", 0);
  const [userWon, setUserWon] = useState<boolean>(false);

  useEffect(() => {
    if (userPicked) {
      const _housePicked = podTypes.filter((t) => t !== userPicked)[
        Math.round(Math.random())
      ];
      setHousePicked(_housePicked);

      const _userWon = hasUserWon(userPicked, _housePicked);
      setUserWon(_userWon);

      const newScore = score + (_userWon ? 1 : -1);
      setScore(newScore);
    }
  }, [userPicked]);

  return (
    <GameContextProvider
      value={{ score, userPicked, housePicked, userWon, onPick: setUserPicked }}
    >
      {children}
    </GameContextProvider>
  );
};

export default GameProvider;
