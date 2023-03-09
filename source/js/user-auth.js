import {closePopover} from './popover.js';

const authButton = document.querySelector('.auth-menu__auth-button');
const loginButton = document.querySelector('.auth-form__button-login');
const authMenu = document.querySelector('.auth-menu');

authButton.addEventListener('click', () => {
    console.log(authMenu.hasAttribute('auth-menu--authorized'))
    if (authMenu.hasAttribute('auth-menu--authorized')) {
        authMenu.classList.remove('auth-menu--authorized');
    } else {
        authButton.classList.toggle('auth-menu__auth-button--active');
    }
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    authMenu.classList.add('auth-menu--authorized');
    closePopover(authButton, 'auth-menu__auth-button--active');
});

closePopover(authButton, 'auth-menu__auth-button--active');