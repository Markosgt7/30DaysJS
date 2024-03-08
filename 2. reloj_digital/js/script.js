const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //console.log("segundos:>"+seconds);

  const minutes = now.getMinutes();
  //console.log("minutos:>"+minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  console.log("horas:>" + hour);
  const hoursDegrees = (hour / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
