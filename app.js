
var box = document.getElementById('box1');
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var header = document.getElementById("header");

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1)


document.getElementById('box-header').addEventListener('click', ReverseBox1); 

//Função para fazer a transição do Box, após o clique no botão
function Box1(){
    box.style.height="60px";   
    tmp = setTimeout(ADD_i,1500)
}

//Função para fazer o icone da seta ficar visível
function ADD_i(){
header.style.justifyContent="center";
icone_menu.style.display="none";
icone_arrow.style.display="inline-block";
}

//Função para fazer a transição do Box, após o clique no botão
function ReverseBox1(event){
  if(event.target.id == 'icone_seta'){
    box.style.height="657px";
    icone_arrow.style.display='none';
    icone_menu.style.display="inline-block";
    header.style.justifyContent="right";
  }
}
