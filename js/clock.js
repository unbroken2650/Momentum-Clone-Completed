const clock = document.querySelector("#clock");

function setClock() {
  const currentDate = new Date();
  const currentHours = String(currentDate.getHours()).padStart(2, "0");
  const currentMinutes = String(currentDate.getMinutes()).padStart(2, "0");
  const currentSeconds = String(currentDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;
}

setClock();
setInterval(setClock, 1000);