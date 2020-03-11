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
