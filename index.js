const openButton = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.burger-close');
const navigation = document.querySelector('nav');
const main = document.querySelector('main');
const logo = document.querySelector('.logo');

openButton.addEventListener('click', () => {
    navigation.style.display='block';
    navigation.style.left = '30%';
    main.style.opacity='20%';
    logo.style.opacity='20%';
})

closeButton.addEventListener('click', () => {
    navigation.style.display='none';
    navigation.style.left = '400px';
    main.style.opacity='100%';
    logo.style.opacity='100%';
})
