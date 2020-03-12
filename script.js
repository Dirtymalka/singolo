const navigation = document.querySelector('.navigation');
const display = document.querySelector('.slider__content');

navigation.addEventListener('click', (event) => {
    navigation.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
}, true);

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('vertical-phone')) display.querySelector('.black-vertical').classList.remove('block');
    else if (!display.querySelector('.black-vertical').classList.contains('block') && event.target.classList.contains('black-vertical') || event.target.classList.contains('vertical-phone')) display.querySelector('.black-vertical').classList.add('block');
});

display.addEventListener('click', (event) => {
    if (display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('horizontal-phone')) display.querySelector('.black-horizontal').classList.remove('block');
    else if (!display.querySelector('.black-horizontal').classList.contains('block') && event.target.classList.contains('black-horizontal') || event.target.classList.contains('horizontal-phone')) display.querySelector('.black-horizontal').classList.add('block');
});






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
