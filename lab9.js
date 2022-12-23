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