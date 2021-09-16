
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var main = document.getElementById('main1')
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var icone_menu = document.getElementById('i_menu');
var boxheader = document.getElementById('box-header')
var ul = document.getElementById('ul');
var header = document.getElementById("header");




icone_menu.addEventListener('click',Menu);

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1);


boxheader.addEventListener('click', ReverseBox1); 


//Função para fazer a transição do Box, após o clique no botão
function Box1(){
    box1.style.height="50px";   
    tmp = setTimeout(ADD_i,900);

}

//Função para fazer o icone da seta ficar visível
function ADD_i(){
boxheader.style.justifyContent="center";
icone_menu.style.display="none";
icone_arrow.style.display="inline-block";
box2.style.display="flex";
}

//Função para fazer a transição do Box, após o clique no botão
function ReverseBox1(event){
  if(event.target.id == 'icone_seta'){
    box1.style.height="657px";
    icone_arrow.style.display='none';
    icone_menu.style.display="inline-block";
    boxheader.style.justifyContent="right";
    box2.style.display="none";
  }
}
var bloco1 = {
  num_projeto:1,
  nome_projeto:"",
  idade:21,
  cidade:"Umari" 
}

var cont = 0
function Menu(){
  console.log(info.nome)

  if(cont == 0){
  ul.style.display="flex";
  header.style.height="12rem";
  header.style.backgroundColor="cornflowerblue";
  header.style.border="1px solid"
  icone_menu.innerHTML="close";
  main.style.opacity=0.3;
  cont = 1;
  }
  else{
    ul.style.display="none";
    header.style.height="3rem";
    icone_menu.innerHTML="menu";
    header.style.backgroundColor="";
    header.style.border=""
    main.style.opacity=1;
    cont = 0;
  }
}




/*
function opacity(event){

  Descricao = document.getElementById("bloco1-div-info");

  (event.target.id == "bloco1"? Descricao.style.display="block" : "")
  
 
}

function desopacity(event){

  (event.target.id == "bloco1"? Descricao.style.display="none" : "")
 }  */

