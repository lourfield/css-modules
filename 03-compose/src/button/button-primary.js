// Import the styles from button.css file.
import styles from './button-primary.css';

/**
 * Creating a button element and add the class from button.css.
 * @type {String}
 */
const button = `<button class="${styles['button']}">Save Changes</button>`;

// Export the button to be used on the other files.
export default button;