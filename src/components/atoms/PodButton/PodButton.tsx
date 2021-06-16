import React from "react";
import classnames from "classnames";

import RockIcon from "components/icons/RockIcon";

import styles from "./PodButton.scss";
import PaperIcon from "components/icons/PaperIcon";
import ScissorIcon from "components/icons/ScissorIcon";
import PodType from "enums/podType.enum";

const buttonIcon = {
  rock: RockIcon,
  paper: PaperIcon,
  scissor: ScissorIcon,
};

interface PodButtonProps {
  type: PodType;
  className?: string;
  onClick?: () => void;
  ripples?: boolean;
}

const PodButton: React.FC<PodButtonProps> = ({
  type,
  className,
  onClick,
  ripples,
}) => {
  const Icon = buttonIcon[type];

  return (
    <div
      data-test-id={`btn-pod-${type}`}
      onClick={onClick}
      className={classnames(
        styles.container,
        styles[`container-${type}`],
        { [styles.containerSelectable]: !!onClick },
        { [styles.containerWithRipples]: ripples },
        className
      )}
    >
      <div className={styles.wrapper}>
        <Icon data-test-id={`icon-${type}`} />
      </div>
    </div>
  );
};

export default PodButton;
