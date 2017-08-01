// Import the button element from the button.js;
import ButtonPrimary from './button-primary';
import ButtonOutline from './button-outline';
import ButtonClear from './button-clear';

// Add the element to the content;
document.getElementById('content').innerHTML = `${ButtonPrimary}${ButtonOutline}${ButtonClear}`;