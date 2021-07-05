var segundos = 0
var minutos = 0
var start = document.getElementById('btn-1')
var lap = document.getElementById('btn-2')
var pause = document.getElementById('btn-3')
var stop = document.getElementById('btn-4')
var ul = document.getElementsByTagName('ul')[0]
var lista = []
var staps = 0

function start_clock(){
    contar = setInterval(timer, 1000)
    lap.addEventListener('click', add_lap)
    icons('none', 'inline-block', 'none', 'inline-block')
}

function timer(){ 
    show()
    segundos += 1
    if (segundos == 60){
        segundos = 0
        minutos += 1
    }
}

function transform_time(seg=0, min=0){
    if (seg < 10){
        return seg = '0' + seg 
    }
    if (min < 10){
        return min = '0' + min
    }
}

function show(){
    let clock = document.getElementsByTagName('h1')[0]
    if (segundos >= 10 || minutos >= 10){
        clock.innerText = `${minutos}:${segundos}`
        if (minutos < 10){
            var min = transform_time(minutos)
            clock.innerText = `${min}:${segundos}`
        }
    }
    else{
        var seg = transform_time(segundos)
        var min = transform_time(minutos)
        clock.innerText = `${min}:${seg}`
    }
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
    staps = 0 
    lista = []
    show(segundos, minutos)
    lap.removeEventListener('click', add_lap)
    icons('inline-block', 'none', 'none', 'inline-block')
    ul.innerHTML = lista
}

function add_lap(){
    staps += 1
    if (segundos < 10 && minutos <= 10){
        var seg = transform_time(segundos)
        var min = transform_time(minutos)
        lista.push(`<li>${staps}° - ${min}:${seg}</li>`)
    }
    else if (minutos < 10 && segundos >= 10){
        var min = transform_time(minutos)
        lista.push(`<li>${staps}° - ${min}:${segundos}</li>`)
    }
    else{
        lista.push(`<li>${staps}° - ${minutos}:${segundos}</li>`)
    }
    ul.innerHTML = lista
}