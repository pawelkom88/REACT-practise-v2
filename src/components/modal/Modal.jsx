import styles from "./Modal.module.css";

export default function Modal({  children }) {
  return (
    <dialog className={styles.modal} open>
      {children}
    </dialog>
  );
}
