import styles from "./AddNewButton.module.css";

console.log(styles);
const AddNewButton = ({ children }) => (
    <button className={styles["add-new-button"]}>{children}</button>
);

export { AddNewButton };
