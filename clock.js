const clock = {};
clock.secondHand = document.querySelector('.second-hand');
clock.minuteHand = document.querySelector('.minute-hand');
clock.hourHand = document.querySelector('.hour-hand');


clock.getTime = () => {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let secondsDegrees = 90 + (seconds * 6);
    let minutesDegrees = 90 + (minutes * 6);
    let hoursDegrees = (hours * 30) + 90;
    clock.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    clock.minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    clock.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

clock.init = () => {
    setInterval(clock.getTime, 1000);
};

clock.init();