import styles from "./Overlay.module.css";

function Overlay(props) {
  return (
    <div
      onClick={props.onCloseClick}
      className={`${styles.overlay} ${
        props.isHidden && styles["hide-overlay"]
      }`}
    >
      {props.children}
    </div>
  );
}

export default Overlay;
