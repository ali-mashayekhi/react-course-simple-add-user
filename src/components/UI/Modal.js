import styles from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";
import Overlay from "./Overlay";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Card className={styles.modal}>
          <h2 className={styles["modal__header"]}>{props.title}</h2>
          <div className={styles["modal__body"]}>
            <div className={styles["modal__message"]}>{props.errorMessage}</div>
            <Button onClick={props.onCloseClick}>Okay</Button>
          </div>
        </Card>,
        document.getElementById("modal_root")
      )}

      {ReactDOM.createPortal(
        <Overlay onClick={props.onCloseClick}></Overlay>,
        document.getElementById("overlay_root")
      )}
    </Fragment>
  );
}

export default Modal;
