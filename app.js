
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var main = document.getElementById('main1')
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var icone_menu = document.getElementById('i_menu');
var boxheader = document.getElementById('box-header')
var ul = document.getElementById('ul');
var header = document.getElementById("header");


document.getElementById("bloco1").addEventListener('click',MostraProjeto)
document.getElementById("bloco3").addEventListener('click',MostraProjeto)
document.getElementById("bloco5").addEventListener('click',MostraProjeto)


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

//Criação do objeto com as informações do projeto1
var bloco1 = {
  num_projeto:"Projeto 1",
  nome_projeto:"Calculadora De IMC",
  descricao:"Esse projeto foi desenvolvido para calcular o indice de massa corporar!",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco3 = {
  num_projeto:"Projeto 2",
  nome_projeto:"Conversor de Temperatura",
  descricao:"Esse projeto foi desenvolvido para transforma um valor em celsiu em fahrenheit e kelvin",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var bloco5 = {
  num_projeto:"Projeto 3",
  nome_projeto:"Cronômetro",
  descricao:"Esse projeto foi desenvolvido para auxiliar em alguma tarefa com tempo marcado",
  tecnologia_usada1:"html",
  tecnologia_usada2:"Css",
  tecnologia_usada3:"Javascript",
}

var cont = 0
function Menu(){
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


function MostraProjeto(event){
  let id = event.target.id;
  var num_obj = id.replace(/\D/g,'');
  let Obj_bloco = [bloco1,"",bloco3,"",bloco5];

  document.getElementById("box-suspenso").style.display="flex"
  var box = document.getElementById("box_interior");

  var h2 = document.createElement('h3');
  var div_img_desc = document.createElement("div");
  var div_img = document.createElement("div");
  var div_titulo_icone= document.createElement("div");
  var h5 = document.createElement('h5')
  var icone = document.createElement('i')
  icone.innerHTML="close"
  var p = document.createElement('p')
  var li_1 = document.createElement('li')
  var li_2 = document.createElement('li')
  var li_3 = document.createElement('li')
  var btn = document.createElement('button')

  div_img.classList.add("img-info");
  div_img_desc.classList.add("img-descricao");
  div_titulo_icone.classList.add("titulo_icone")

  h2.innerHTML=Obj_bloco[num_obj-1].nome_projeto;
  div_img.style.backgroundImage="url(fotos_projetos/projeto"+num_obj+".png)";
  h5.innerHTML=Obj_bloco[num_obj-1].descricao;
  p.innerHTML= "Tecnologia Usada:";
  li_1.innerHTML= Obj_bloco[num_obj-1].tecnologia_usada1;
  li_2.innerHTML= Obj_bloco[num_obj-1].tecnologia_usada2;
  li_3.innerHTML= Obj_bloco[num_obj-1].tecnologia_usada3;
  btn.innerHTML="Ver projeto";

  div_img_desc.appendChild(div_img);
  div_img_desc.appendChild(h5)
  div_titulo_icone.appendChild(h2)
  div_titulo_icone.appendChild(icone)
  box.appendChild(div_titulo_icone);
  box.appendChild(div_img_desc);
  box.appendChild(p);
  box.appendChild(li_1);
  box.appendChild(li_2);
  box.appendChild(li_3);
  box.appendChild(btn);
}