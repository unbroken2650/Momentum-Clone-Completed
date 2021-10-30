const images = [
    'bgImage (1).jpg',
    'bgImage (2).jpg',
    'bgImage (3).jpg',
    'bgImage (4).jpg',
    'bgImage (6).jpg',
    'bgImage (7).jpg',
    'bgImage (8).jpg',
    'bgImage (9).jpg',
    'bgImage (10).jpg',
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundStyle = document.createElement('style');
backgroundStyle.innerHTML = ` .background{
background-image: url("img/${chosenImage}") }`;
document.head.appendChild(backgroundStyle);