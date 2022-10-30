import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className={`${styles.container} ${styles.modal}`}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
