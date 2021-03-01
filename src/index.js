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

    const isMinimalView = scream.isMinimalView();
    console.log(isMinimalView ? 'Minimal view' : 'Not minimal view');
});
