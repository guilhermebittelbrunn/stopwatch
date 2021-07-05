var segundos = 1 
var minutos = 0
var start = document.getElementById('btn-1')
var lap = document.getElementById('btn-2')
var pause = document.getElementById('btn-3')
var stop = document.getElementById('btn-4')

function start_clock(){
    contar = setInterval(timer, 1000)
    icons('none', 'inline-block', 'none', 'inline-block')
}

function timer(){ 
    show(segundos, minutos)
    segundos += 1
    if (segundos == 60){
        segundos = 0
        minutos += 1
    }
}

function show(seg, min){
    let clock = document.getElementsByTagName('h1')[0]
    if (seg < 10){
        seg = '0' + seg
    }
    if (min < 10){
        min = '0' + min
    }
    clock.innerText = `${min}:${seg}`
}

function pause_timer(){
    clearInterval(contar)
    icons('inline-block', 'none', 'inline-block', 'none')
}

function icons(estado1, estado2, estado3, estado4){
    start.style.display = `${estado1}`
    pause.style.display = `${estado2}`
    stop.style.display = `${estado3}`
    lap.style.display = `${estado4}`
}

function stop_timer(){
    segundos = 0
    minutos = 0
    show(segundos, minutos)
    icons('inline-block', 'none', 'none', 'inline-block')
}