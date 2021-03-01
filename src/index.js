import Scream from 'scream';

window.addEventListener('DOMContentLoaded', () => {
    {
        const consoleElement = document.querySelector('.console');
        
        console.log = message => {
            consoleElement.textContent = message;
        }
    }

    const scream = new Scream({
        viewport: false,
    });

    console.log(scream.isMinimalView());
});
