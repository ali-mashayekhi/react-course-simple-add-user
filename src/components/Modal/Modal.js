import styles from "./Modal.module.css";
import Button from "../UI/Button";

function Modal(props) {
  return (
    <div
      className={`${styles.modal} ${props.isHidden && styles["hide-modal"]}`}
    >
      <h2 className={styles["modal__header"]}>Invalid Input</h2>
      <div className={styles["modal__body"]}>
        <div className={styles["modal__message"]}>{props.errorMessage}</div>
        <Button onClick={props.onCloseClick}>Okay</Button>
      </div>
    </div>
  );
}

export default Modal;
