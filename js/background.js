const images =[
    "background (1).jpg",
    "background (2).jpg",
    "background (3).jpg",
    "background (4).jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const backgroundImage = document.createElement("style");
backgroundImage.type = "text/css";
backgroundImage.innerText = `body{
    background-image: url("img/${chosenImage}");
    height: 100%;
    width: 100%;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
        }
`;

document.head.appendChild(backgroundImage);