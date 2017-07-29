// Import styles from style.css using ES6 import directive;
import styles from '../css/style.css';

// Create an element and and add the .btn class to the element;
const elem = `<button class="${styles.button}">Save Changes</button>`;

// Add the element to the content;
document.getElementById('content').innerHTML = elem;