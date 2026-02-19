setInterval(setClock, 1000);

const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')


function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const mituteRatio = (secondRatio + currentDate.getMilliseconds()) / 60;
    const hourRatio = (mituteRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, mituteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()

