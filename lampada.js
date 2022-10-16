const turnOn = document.getElementById ( 'turnON' );
const turnOff = document.getElementById ( 'turnOFF' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    lamp.src = './img/on.jpg'
}

function lampOff (){
    lamp.src = './img/desligada.jpg'
}

function lampQuebra() {
    lamp.src = './img/quebrada.jpg'
}



turnOn.addEventListener('click', lampOn)

turnOff.addEventListener('click', lampOff)

lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)

lamp.addEventListener('dblclick',lampQuebra)

