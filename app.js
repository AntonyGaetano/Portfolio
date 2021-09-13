
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var header = document.getElementById("header");
var bloco = document.querySelectorAll("div.bloco");

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1)


document.getElementById('box-header').addEventListener('click', ReverseBox1); 

//Função para fazer a transição do Box, após o clique no botão
function Box1(){
    box1.style.height="60px";   
    tmp = setTimeout(ADD_i,900)
 
}

//Função para fazer o icone da seta ficar visível
function ADD_i(){
header.style.justifyContent="center";
icone_menu.style.display="none";
icone_arrow.style.display="inline-block";
box2.style.display="flex"
Add()
}

//Função para fazer a transição do Box, após o clique no botão
function ReverseBox1(event){
  if(event.target.id == 'icone_seta'){
    box1.style.height="657px";
    icone_arrow.style.display='none';
    icone_menu.style.display="inline-block";
    header.style.justifyContent="right";
    box2.style.display="none";
  }
}

function Animacao(props){

  if(props == 'Passar'){
    for(let i = 0; i < bloco.length; i++){
     bloco[i].style.animation="BlocoPassar 0.6s 1";
    }
    Add();
    tempo = setTimeout(tirarA,1200)

  }
  else if(props == 'Voltar'){
    for(let i = 0; i < bloco.length; i++){
    bloco[i].style.animation="BlocoVoltar 0.6s 1";
    }
    
    tempo = setTimeout(TirarAnimacao,1200)
  }
}

function TirarAnimacao(){
  for(let i = 0; i < bloco.length; i++){
    bloco[i].style.animation="none";
   }
}

var Projetos = ["Projeto 1","Projeto 2","Projeto 3","Projeto 4","Projeto 5","Projeto 6"," Projeto 7","Projeto 8"];

var Descricao = ["Lista De Tarefas","Cronômetro","Calculador IMC","Calculadora Do Segundo Grau","Calculadora Do Segundo Grau - Com React","Jogo Pedra Papel E Tesoura","Conversão De Temperatura","Validando Fórmulario Via JavaScript"];

var tag_H5 = document.querySelectorAll("h5")

var cont = 0;
var cont2 = 0
function Add(num){
  if(num == 0){
   tag_H5[cont].innerHTML = Descricao[cont2];
   tag_H5[cont+1].innerHTML = Descricao[cont2+1];
   tag_H5[cont+2].innerHTML = Descricao[cont2+2];
   tag_H5[cont+3].innerHTML = Descricao[cont2+3];
   cont2=cont2+4;
  }
  else if(cont2 == 4){
    tag_H5[cont].innerHTML = Descricao[cont2];
    tag_H5[cont+1].innerHTML = Descricao[cont2+1];
    tag_H5[cont+2].innerHTML = Descricao[cont2+2];
    tag_H5[cont+3].innerHTML = Descricao[cont2+3];
    cont2=cont2-4;
  }
}
