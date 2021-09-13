const progressBar = document.getElementById('progressbar'),
      active = document.getElementById('messageAlert'),
      size = document.getElementById('size');

var width = 1; 
var id = setInterval(frame,20);
var calculo;

function frame(){
    if (width >= 81){
        clearInterval(id);
        active.classList.add('active');
    }else{
        width++;
        progressBar.style.width = width + '%';
        var calculo = width * 10.065;
        size.innerHTML = parseInt(calculo);
        active.classList.remove('active');
    }
}