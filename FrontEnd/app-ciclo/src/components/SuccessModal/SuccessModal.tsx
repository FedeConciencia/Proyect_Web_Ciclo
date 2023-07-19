// components/SuccessModal.js
import React from "react";
import Modal from "react-modal";
import { BiCheckCircle } from "react-icons/bi";
import styles from "./SuccessModal.module.scss";

Modal.setAppElement("#__next"); // Esta línea es necesaria para evitar problemas de accesibilidad

const SuccessModal = ({ isOpen, onClose, header, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Mensaje de éxito"
      className={styles.container}
    >
      <h2>
        <BiCheckCircle color="green" fontSize={50} />
      </h2>
      <h3>{header}</h3>
      <p>{message}</p>
    </Modal>
  );
};

export default SuccessModal;
