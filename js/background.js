const images =[
    "background (1).jpg",
    "background (2).jpg",
    "background (3).jpg",
    "background (4).jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const backgroundStyle = document.createElement("style");
backgroundStyle.innerHTML = `
.background{
background-image: url("img/${chosenImage}")
}`;
console.dir(backgroundStyle);
document.head.appendChild(backgroundStyle);