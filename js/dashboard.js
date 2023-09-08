const mobileBurgerMenu = document.querySelector('.mobile-burgermenu');
const mobileBurgerMenuButton = document.querySelector('.mobile-menubars');

mobileBurgerMenuButton.addEventListener('click', () => {
    const visibility = mobileBurgerMenu.getAttribute('data-visible');
    
    if (visibility === 'false') {
        mobileBurgerMenu.setAttribute('data-visible', true);
    } else if (visibility === 'true') {
        mobileBurgerMenu.setAttribute('data-visible', false);
    }
});

// dropdown, show menus
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownContent = document.querySelectorAll('.dropdown-content');

document.addEventListener("click", toggleDropdown);

function toggleDropdown(event) {
    if (event.target.classList.contains('dropdown-button')) {
        event.target.parentElement.nextElementSibling.classList.toggle('dropdown-show');
        dropdownContent.forEach((element) => {
            if (element != event.target.parentElement.nextElementSibling) {
                element.classList.remove('dropdown-show');
            }
        });

    } else {
        dropdownContent.forEach((element) => element.classList.remove('dropdown-show'));
    } 
}

// function getTimeLeft(ms) {
//     let seconds = Math.floor(ms / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
//     let days = Math.floor(hours / 24);

//     var newline = "\r\n";
//     let time = days + "dagen " + newline + hours % 24 + "uur " + minutes % 60 + "minuten " + seconds % 60 + "seconden";
    
//     return time
// }

//   countdownElement.textContent = getTimeLeft(millisecondsLeft);

function getTimeLeft() {
    let now = new Date();
    const nextPayday = new Date(now.getFullYear(), now.getMonth(), 25);
    nextPayday.setHours(11); // Set 11am
    nextPayday.setMinutes(0);
    nextPayday.setSeconds(0);
    nextPayday.setMilliseconds(0);
    let millisecondsLeft = nextPayday - now;

    let seconds = Math.floor(millisecondsLeft / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let countdownDays = document.getElementById('countdown-days');
    let countdownHours = document.getElementById('countdown-hours');
    let countdownMinutes = document.getElementById('countdown-minutes');
    let countdownSeconds = document.getElementById('countdown-seconds');

    var newline = "\r\n";
    countdownDays.textContent = days + " dagen"
    countdownHours.textContent = hours % 24 + newline + " uur"
    countdownMinutes.textContent = minutes % 60 + newline + " minuten"
    countdownSeconds.textContent = seconds % 60 + newline + " seconden"
}

getTimeLeft()
setInterval(getTimeLeft, 1000);