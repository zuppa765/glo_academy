window.addEventListener('DOMContentLoaded', () => {

    function showTime(deadline) {
        const timerHour = document.getElementById('timer-hours');
        const timerMinutes = document.getElementById('timer-minutes');
        const timerSeconds = document.getElementById('timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(); //новый год
            const dateNow = new Date().getTime(); //сейчас
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60); //ceкунды
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor((timeRemaining / 60) / 60);
            //const days = Math.floor(timeRemaining / 60 / 60 / 24);
            return {
                // days,
                hours,
                minutes,
                seconds
            };
        }
        function updateClock() {
            const timer = getTimeRemaining();
            timerHour.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);
        }
        //Add zero
        function addZero(n) {
            return (parseInt(n, 10) < 10  ? '0' : '') + n;
        }

        updateClock();
        setInterval(updateClock, 1000);
    }
    showTime('16 december 2020');
});
//меню
const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(elem => elem.addEventListener('click', handleMenu));
};
toggleMenu();


//поп-ап меню
const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');
    let opacity = 0, intervalID;
    const fadeIn = () => {
        intervalID = requestAnimationFrame(fadeIn);
        if (opacity < 1) {
            opacity += 0.1;
            popup.style.opacity = opacity;
        } else {
            cancelAnimationFrame(intervalID);
        }
    };
    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            opacity = 0;
            fadeIn();
        });
    });
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        opacity = 0;
    });
};
togglePopUp();

//лпавный скролл
const clickHandler = e => {
    e.preventDefault();
    const scrollBtn = document.querySelector('main>a');
    const offsetTop = document.querySelector('.service').offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
    scrollBtn.addEventListener("click", clickHandler());
};
clickHandler();


