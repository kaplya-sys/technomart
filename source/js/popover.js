const closeButtonList = document.querySelectorAll('.popover__close-button');

const closePopover = (popoverWindow, removeClass) => {
    for (let i = 0; i < closeButtonList.length; i++) {
        closeButtonList[i].addEventListener('click', () => {
            popoverWindow.classList.remove(removeClass)
        });
    };
};

export {closePopover};