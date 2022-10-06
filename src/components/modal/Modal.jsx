import styles from "./Modal.module.css";

export default function Modal({ children, onClick }) {
  return (
    <dialog onClick={onClick} className={styles.modal} open>
      {children}
    </dialog>
  );
}
