import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={props.onClear}></div>;
  };

  const ModalOverlay = () => {
    return (
      <div className={`${styles.container} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClear}>Okay</Button>
        </footer>
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClear={props.onClear} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClear={props.onClear}
        />,
        document.getElementById("modalOverlay-root")
      )}
    </>
  );
};

export default ErrorModal;
