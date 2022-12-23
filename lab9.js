function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickName(button) {
    if(button.innerHTML == 'Максим')
        button.innerHTML = 'Овчинников';
    else
        button.innerHTML = 'Максим';
}
function clickMeAagain(button) {
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';
    else if(button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';
    else if(button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else if(button.innerHTML == 'Начать сначала')
        button.innerHTML = 'Нажми меня';
    else
        button.innerHTML = 'Нажми меня';

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('4').style.backgroundColor = color
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);

    coords.addEventListener('click', func);
    function func(event) {
        if (event.ctrlKey) {
            alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Ctrl');
        }
        if (event.altKey) {
            alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Alt');
        }
        if (event.shiftKey) {
            alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Shift');
        }
    }
});