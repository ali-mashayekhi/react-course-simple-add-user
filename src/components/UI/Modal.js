import styles from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";
import Overlay from "./Overlay";

function Modal(props) {
  return (
    <Overlay onClick={props.onCloseClick}>
      <Card className={styles.modal}>
        <h2 className={styles["modal__header"]}>{props.title}</h2>
        <div className={styles["modal__body"]}>
          <div className={styles["modal__message"]}>{props.errorMessage}</div>
          <Button onClick={props.onCloseClick}>Okay</Button>
        </div>
      </Card>
    </Overlay>
  );
}

export default Modal;
