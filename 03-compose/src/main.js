// Import the button primary element from the button.js;
import buttonPrimary from './button/button-primary.js';

// Import the button outline element from the button.js;
import buttonOutline from './button/button-outline.js';

// Add the element to the content;
document.getElementById('content').innerHTML = `${buttonPrimary}${buttonOutline}`;