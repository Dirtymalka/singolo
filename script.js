const navigation = document.querySelector('.navigation');

//Intaractive Menu

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPos = window.scrollY;
    const sections = document.querySelectorAll('body > section');
    const links = document.querySelectorAll('.navigation a')

    if (currentPos === 0) {
        navigation.querySelectorAll('a').forEach(element => element.classList.remove('active'));
        navigation.querySelectorAll('a')[0].classList.add('active');
    }

    sections.forEach((item) => {
        if ((item.offsetTop - document.querySelector('.header').offsetHeight) <= currentPos && (item.offsetTop + item.offsetHeight) > currentPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (item.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });

    if ((window.pageYOffset + document.documentElement.clientHeight) === Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )) {
        navigation.querySelectorAll('a').forEach(element => element.classList.remove('active'));
        navigation.querySelectorAll('a')[links.length - 1].classList.add('active');
    }
}

navigation.addEventListener('click', (event) => {
    navigation.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelector('.navigation').classList.remove('active-burger');
    document.querySelector('.header__navigation').classList.remove('active-burger');
    document.querySelector('.hamburger').classList.remove('active-burger');
    document.querySelector('.hamburger-line').classList.remove('active-burger');
});

//Disconnecting Phones

const display = document.querySelector('.slider-wrapper');

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('vertical-phone_home-button')) display.querySelector('.black-vertical').classList.remove('block');
    else if (!display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('vertical-phone_home-button')) display.querySelector('.black-vertical').classList.add('block');
});

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('horizontal-phone_home-button')) display.querySelector('.black-horizontal').classList.remove('block');
    else if (!display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('horizontal-phone_home-button')) display.querySelector('.black-horizontal').classList.add('block');
});


//Slider

const container = document.querySelector('.slider-wrapper');

const slider1 = container.querySelector('.slider1').innerHTML;

const slider2 = container.querySelector('.slider2');

container.addEventListener('click', (event) => {
    const slider = Array.from(document.querySelectorAll('.slider-item'));
    if (event.target.tagName != 'BUTTON') return;
    if (event.target.classList.contains('right-arrow')) {
        document.querySelector('.slider-wrapper').innerHTML = '';

        for (let i = 0; i < 4; i++) {
            if (i === 1) {
                document.querySelector('.slider-wrapper').append(slider[2]);
                continue;
            }
            if (i == 2) {
                document.querySelector('.slider-wrapper').append(slider[1]);
                continue;
            }
            document.querySelector('.slider-wrapper').append(slider[i]);
        }
    }
    container.querySelector('.slider2').classList.add('animation1');
    container.querySelector('.slider1').classList.add('animation1');
    setTimeout(() => {
        container.querySelector('.slider2').classList.remove('animation1');
        container.querySelector('.slider1').classList.remove('animation1');
    }, 1000);
});

container.addEventListener('click', (event) => {
    const slider = Array.from(document.querySelectorAll('.slider-item'));
    if (event.target.tagName != 'BUTTON') return;
    if (event.target.classList.contains('left-arrow')) {
        container.querySelector('.slider2').classList.add('animation3');
        container.querySelector('.slider1').classList.add('animation3');
        setTimeout(() => {
            document.querySelector('.slider-wrapper').innerHTML = '';
            for (let i = 0; i < 4; i++) {
                if (i === 1) {
                    document.querySelector('.slider-wrapper').append(slider[2]);
                    continue;
                }
                if (i == 2) {
                    document.querySelector('.slider-wrapper').append(slider[1]);
                    continue;
                }
                document.querySelector('.slider-wrapper').append(slider[i]);
            }
            container.querySelector('.slider2').classList.remove('animation3');
            container.querySelector('.slider1').classList.remove('animation3');
        }, 1000);
    }
});


//Form

const submit = document.getElementById('submit');
const closeButton = document.getElementById('close-button');
const messageTheme = document.getElementById('no-theme').innerHTML;
const messageDescription = document.getElementById('no-description').innerHTML;

submit.addEventListener('click', () => {
    if (!document.getElementById('user-name').value.toString().match(/^[A-Za-z_-]{1,16}$/)) return;
    if (!document.getElementById('user-email').value.toString().match(/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$/)) return;
    const subject = document.getElementById('subject').value.toString();
    if (subject != '') {
        document.getElementById('message-theme').innerText = subject;
    } else {
        document.getElementById('no-theme').innerHTML = 'Without subject';
    }

    const projectDescription = document.getElementById('project-description').value.toString();
    if (projectDescription != '') {
        document.getElementById('message-description').innerText = projectDescription;
    } else {
        document.getElementById('no-description').innerHTML = 'Without description';
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
    if (event.target.tagName != 'IMG') return;
    images.querySelectorAll('div').forEach(item => item.classList.remove('image-active'));
    event.target.closest('div').classList.add('image-active');
});


//PORTFOLIO BUTTONS

const portfolioList = document.getElementById('portfolio__list');

portfolioList.addEventListener('click', (event) => {
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


//HAMBURGER

const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (event) => {
    document.querySelector('.hamburger').classList.toggle('active-burger');
    document.querySelector('.hamburger-line').classList.toggle('active-burger');
    document.querySelector('.navigation').classList.toggle('active-burger');
    document.querySelector('.header__navigation').classList.toggle('active-burger');
    document.querySelector('.logo').classList.toggle('active-burger');
})
