// Import the styles from index.css file.
import styles from './index.css';

/**
 * Creating a button element and add the class from button.css.
 * @type {String}
 */
const button = `<button class="${styles['button']}">Details</button>`;

// Export the button to be used on the other files.
export default button;