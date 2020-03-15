const navigation = document.querySelector('.navigation');

//Intaractive Menu

navigation.addEventListener('click', (event) => {
    navigation.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
});

//Disconnecting Phones

const display = document.querySelector('.slider__content');

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('vertical-phone')) display.querySelector('.black-vertical').classList.remove('block');
    else if (!display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('black-vertical') || event.target.classList.contains('vertical-phone')) display.querySelector('.black-vertical').classList.add('block');
});

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('horizontal-phone')) display.querySelector('.black-horizontal').classList.remove('block');
    else if (!display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('black-horizontal') || event.target.classList.contains('horizontal-phone')) display.querySelector('.black-horizontal').classList.add('block');
});


//Slider

const container = document.querySelector('.slider-container');
const slider = container.querySelector('.slider__content');

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('right-arrow') || event.target.classList.contains('left-arrow')) {
        slider.querySelectorAll('div').forEach(element => element.classList.toggle('hidden'));
        if (!slider.querySelector('.slider2').classList.contains('hidden')) {
            container.classList.add('slider-bg');
            container.querySelectorAll('button').forEach(element => element.classList.add('slider-bg'));
        }
        else {
            container.classList.remove('slider-bg');
            container.querySelectorAll('button').forEach(element => element.classList.remove('slider-bg'));
        }
    }
});

//Form

const submit = document.getElementById('submit');
const closeButton = document.getElementById('close-button');
const messageTheme = document.getElementById('no-theme').innerHTML;
const messageDescription = document.getElementById('no-description').innerHTML;

submit.addEventListener('click', () => {
    //console.log((/^[a-z0-9_-]{3,16}$/).test(document.getElementById('user-name').value.toString()));
    if (!document.getElementById('user-name').value.toString().match(/^[A-Za-z0-9_-]{1,16}$/)) return;
    if (!document.getElementById('user-email').value.toString().match(/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$/)) return;
    const subject = document.getElementById('subject').value.toString();
    if (subject != '') {
        document.getElementById('message-theme').innerText = subject;
    } else {
        document.getElementById('no-theme').innerHTML = 'Нет темы';
    }

    const projectDescription = document.getElementById('project-description').value.toString();
    if (projectDescription != '') {
        document.getElementById('message-description').innerText = projectDescription;
    } else {
        document.getElementById('no-description').innerHTML = 'Нет описания';
    }

    document.getElementById('message-block').classList.remove('hidden-block');
});

closeButton.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden-block');
    document.getElementById('no-theme').innerHTML = messageTheme;
    document.getElementById('no-description').innerHTML = messageDescription;
    document.getElementById('form').reset();
});


//PORTFOLIO-IMAGES

const images = document.getElementById('portfolio__images');

images.addEventListener('click', (event) => {
    console.log(event.target.closest('div'));
    if (event.target.tagName != 'IMG') return;
    images.querySelectorAll('div').forEach(item => item.classList.remove('image-active'));
    event.target.closest('div').classList.add('image-active');
});


//PORTFOLIO BUTTONS

const portfolioList = document.getElementById('portfolio__list');

portfolioList.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.tagName != 'BUTTON') return;
    portfolioList.querySelectorAll('button').forEach(element => element.classList.remove('portfolio__list_button-active'));
    event.target.classList.add('portfolio__list_button-active');

    function sortPictures() {
        let pictures = Array.from(images.querySelectorAll('div'));

        document.getElementById('portfolio__images').innerHTML = '';
        for (let i = 1; i < pictures.length; i++) {
            document.getElementById('portfolio__images').appendChild(pictures[i]);

        }
        document.getElementById('portfolio__images').appendChild(pictures[0]);
        return;
    }

    sortPictures();
});
