const mobileBurgerMenu = document.querySelector('.mobile-burgermenu');
const mobileBurgerMenuButton = document.querySelector('.mobile-menubars');

mobileBurgerMenuButton.addEventListener('click', () => {
    const visibility = mobileBurgerMenu.getAttribute('data-visible');
    
    if (visibility === 'false') {
        mobileBurgerMenu.setAttribute('data-visible', true);
    } else if (visibility === 'true') {
        mobileBurgerMenu.setAttribute('data-visible', false);
    }
})