function on(){
    document.querySelector("#lampada").src = "imagens/ligada.png";
}
function off(){
    document.querySelector("#lampada").src = "imagens/desligada.png";
}
function quebrar(){
    document.querySelector("#lampada").src = "imagens/quebrada.png";
}
function piscar(){
    let intervalo = 0;
    for(i=0; i<10;i++){
        intervalo += 300;
        setTimeout("document.querySelector('#lampada').src = 'imagens/ligada.png' ",intervalo);
        intervalo += 300;
        setTimeout("document.querySelector('#lampada').src = 'imagens/desligada.png' ",intervalo);
    }
}

let lamp = document.querySelector("#lampada")

lamp.addEventListener("mouseover",on)
lamp.addEventListener("mouseleave",off)
lamp.addEventListener("dblclick", quebrar)
