// submit.js
import styles from './styles/submitButton.module.css';
export const SubmitButton = () => {

    return (
        <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} type="submit">Submit</button>
        </div>
    );
}
