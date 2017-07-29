// Import the styles from alert.css file.
import styles from './index.css';

/**
 * Creating an alert element and add the class from alert.css.
 * @type {String}
 */
const alert = `<div class="${styles['alert']} ${styles['alert-success']}" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>`;

export default alert;