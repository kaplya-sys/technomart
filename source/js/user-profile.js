import {closePopover} from './popover.js';

const profileButton = document.querySelector('.auth-menu__profile-button');
const logoutButton = document.querySelector('.popover__button-logout');
const authMenu = document.querySelector('.auth-menu');

profileButton.addEventListener('click', () => {
    profileButton.classList.toggle('auth-menu__profile-button--active');
});

logoutButton.addEventListener('click', (e) => {
    e.preventDefault()
    authMenu.classList.remove('auth-menu--authorized');
    profileButton.classList.remove('auth-menu__profile-button--active');
});

closePopover(profileButton, 'auth-menu__profile-button--active');
