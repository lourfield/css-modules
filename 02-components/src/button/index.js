// Import the styles from button.css file.
import styles from './index.css';

/**
 * Creating a button element and add the class from button.css.
 * @type {String}
 */
const button = `<button class="${styles['button']} ${styles['button-outline']}">Save Changes</button>`;

// Export the button to be used on the other files.
export default button;