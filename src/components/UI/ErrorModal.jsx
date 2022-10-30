import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClear}>
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
    </div>
  );
};

export default ErrorModal;
