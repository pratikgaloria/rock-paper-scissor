import React from "react";
import RulesImage from "../images/RulesImage";
import Modal from "../atoms/Modal";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => (
  <Modal title={"Rules"} isOpen={isOpen} onClose={onClose}>
    <RulesImage />
  </Modal>
);

export default RulesModal;
