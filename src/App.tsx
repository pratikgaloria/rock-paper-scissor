import React, { useState } from "react";

import styles from "./App.scss";
import Button from "components/atoms/Button";
import Header from "components/organisms/Header";
import Game from "components/pages/Game";
import RulesModal from "components/organisms/RulesModal";
import GameProvider from "context/game.context";

const App = () => {
  const [rulesOpen, setRulesOpen] = useState(false);

  return (
    <GameProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <Game />
        </div>
        <Button
          data-test-id="btn-rules"
          variant="outlined"
          className={styles.btnRules}
          onClick={() => setRulesOpen(true)}
        >
          Rules
        </Button>
        <RulesModal isOpen={rulesOpen} onClose={() => setRulesOpen(false)} />
      </div>
    </GameProvider>
  );
};

export default App;
