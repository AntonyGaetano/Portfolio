
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var main = document.getElementById('main1')
var icone_menu = document.getElementById("i_menu");
var icone_arrow = document.getElementById('icone_seta');
var icone_menu = document.getElementById('i_menu');
var boxheader = document.getElementById('box-header')
var ul = document.getElementById('ul');
var header = document.getElementById("header");
var icone_sobe_header = document.getElementById('seta-box-header');



var BLOCOS = document.querySelectorAll('div.blocos-div');
for(let k = 0; k < BLOCOS.length; k++){
  BLOCOS[k].addEventListener('click',MostraProjeto)
}

icone_menu.addEventListener('click',Menu);
icone_sobe_header.addEventListener('click',Menu);

//Chama de funções
document.getElementById('btn-ver-projeto').addEventListener("click",Box1);
document.getElementById("i_fechar").addEventListener("click",FecharProjeto);

boxheader.addEventListener('click', ReverseBox1); 

document.getElementById("li_sobre").addEventListener("click",Sobre);
document.getElementById("li_habilidades").addEventListener("click",Sobre);


//Função para fazer a transição do Box, após o clique no botão
function Box1(){

  document.body.style.padding="none"
  document.body.style.margin="none"
  document.body.style.width=""
  document.body.style.height=""

    box1.style.height="50px";  
    ul.style.display="none"; 
    icone_sobe_header.style.display="none"
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

    document.body.style.padding="0"
    document.body.style.margin="0"
    document.body.style.width="100%"
    document.body.style.height="100%"
  }
}

//Criação do objeto com as informações do projeto1
var bloco1 = {
  num_projeto:"Projeto 1",
  nome_projeto:"Calculadora De IMC",
  descricao:"Esse projeto foi desenvolvido para calcular o indice de massa corporal. Foi usado as seguintes tecnologias no processo: HTML, CSS, JAVASCRIPT. O projeto já está responsivo e pronto para uso!",
}

var bloco2 = {
  num_projeto:"Projeto 2",
  nome_projeto:"Validando Formulário",
  descricao:"Esse projeto foi feito para validar formulário , sabemos que a validação pode ser feito atráves do html por si, mas resolvi mostrar um pouco da habilidade em JS e fiz o processo da validação com script. Nesse projeto foi usado Html para marcação, Css para estilização e Javascript para validação. Esse projeto já está responsivo!",
}

var bloco3 = {
  num_projeto:"Projeto 3",
  nome_projeto:"Conversor de Temperatura",
  descricao:"Esse projeto é uma calculadora que  transforma um valor em celsius em fahrenheit ou celsius em kelvin. É um projeto bastante legal e interativo. Foi usado HTML, CSS e JAVASCRIPT como tecnologias. O projeto já está responsivo e pronto para uso!",
}

var bloco4 = {
  num_projeto:"Projeto 4",
  nome_projeto:"Jogo Pedra, Papel e Tesoura",
  descricao:"Esse projeto foi a criação de um jogo chamado Pedra, Papel e Tesoura. Um projeto bastante interativo e divertido. Foi usado o Html para marcação, Css para estilizar, e o Javascript para fazer todo o restante, como por exemplo a logica do jogo. Esse projeto já está responsivo e pronto para jogar!",
}

var bloco5 = {
  num_projeto:"Projeto 5",
  nome_projeto:"Cronômetro",
  descricao:"Esse projeto é simples, mas só quem já fez sabe o quão pode quebrar um pouco a cabeça, pois precisa de um pouco de lógica de programção e conhecimento para se usar. Foi desenvolvido para auxiliar em alguma tarefa com tempo marcado. As Tecnologias usadas foi Html, Css e Javascript! Esse projeto já está responsivo e para se utilizar!",
}

var bloco6 = {
  num_projeto:"Projeto 6",
  nome_projeto:"Lista De Tarefas",
  descricao:"Esse projeto foi desenvolvido para auxiliar nas tarefas do dia a dia, para melhor organização. A lista de tarefa foi um projeto bacana de desenvolver, pos foi usado nele um armazenamento local, o localStorage, para guardar as tarefas. Esse projeto foi feito com Html, CSS e Javascript! Esse projeto já está responsivo e pronto para utilizar",
}


var link_projetos = 
["https://calculadorade-imc.netlify.app",
"https://validadacao-de-formulario.netlify.app",
"https://conversor-de-temperatura.netlify.app",
"https://jogo-pedra-papel-e-tesoura.netlify.app/",
"https://cronometroviajavascript.000webhostapp.com/html/indxe.html ",
"https://lista-de-tarefas-personalizada.netlify.app"];


var cont = 0
function Menu(){
  if(cont == 0){

    var altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  

  ul.style.display="flex";
  header.style.height=altura+"px";
  header.style.backgroundColor="cornflowerblue";
  header.style.border="1px solid";
  icone_menu.innerHTML="";
  icone_sobe_header.style.display="flex"
  main.style.opacity=0.3;
  cont = 1;
  }
  else{
    ul.style.display="none";
    header.style.height="3rem";
    icone_menu.innerHTML="menu";
    header.style.backgroundColor="";
    header.style.border="";
    icone_sobe_header.style.display=""
    main.style.opacity=1;
    cont = 0;
  }
}

 
var ChamaProjeto = 0;

function MostraProjeto(event){
  
  if(ChamaProjeto == 0){

  let id = event.target.id;
  var num_obj = id.replace(/\D/g,'');
  let Obj_bloco = [bloco1,bloco2,bloco3,bloco4,bloco5, bloco6];
  

  document.getElementById("box-suspenso").style.display="flex";
  var box = document.getElementById("box_interior");
  var h2 = document.getElementById("nome-projeto");

  var div_img_desc = document.createElement("div");
  var div_img = document.createElement("div");
  var div_tec_det = document.createElement('div');
  var div_tec = document.createElement('div');
  var div_det = document.createElement('div');
  var div_desc = document.createElement('div');

  var h5 = document.createElement('h5');
  var h4 = document.createElement('h4');
  var detalhe = document.createElement('h5'); 
  var btn = document.createElement('button');
  var a = document.createElement("a");

  a.appendChild(btn)
  div_desc.appendChild(h5)
  div_img_desc.appendChild(div_img);
  div_img_desc.appendChild(div_desc);

  div_tec.appendChild(h4)

  div_det.appendChild(detalhe);
  div_det.appendChild(a);

  div_tec_det.appendChild(div_tec)
  div_tec_det.appendChild(div_det)

  box.appendChild(div_img_desc);
  box.appendChild(div_tec_det);
 
  div_img.classList.add("img-info");
  div_img_desc.classList.add("img-descricao");
  div_desc.classList.add('descricao')
  div_tec.classList.add("tecnologia");
  div_det.classList.add('detalhe')
  div_tec_det.classList.add('tecnologia-detalhe')
  
 
  document.getElementById("i_fechar").addEventListener("click",()=>{
    div_img_desc.remove()
    div_img.remove()
    div_tec_det.remove()
    ChamaProjeto = 0;
  });
 

  h2.innerHTML = Obj_bloco[num_obj-1].nome_projeto;
  div_img.style.backgroundImage = "url(fotos_projetos/projeto"+num_obj+".png)";
  h5.innerHTML = Obj_bloco[num_obj-1].descricao;
  detalhe.innerHTML = "Para mais detalhes, clique abaixo!"
  btn.innerHTML = "Ver projeto"; 
  a.href = link_projetos[num_obj-1]

  ChamaProjeto = 1;
 }

}

function FecharProjeto(){
  document.getElementById("box-suspenso").style.display="none";  
}


function Inicial(){
  document.body.style.padding="0"
  document.body.style.margin="0"
  document.body.style.width="100%"
  document.body.style.height="100%"
}


function Sobre(event){
   let id  = event.target.id;

   if(id == "li_sobre"){

     Menu();
     tempo = setTimeout(Box1,800)
     tmp = setTimeout(()=>{
     // selecionar elemento
     let el = document.getElementById('sobre');
     // utiliza método
     let elCoordenadas = el.getBoundingClientRect(); 
     window.scrollTo(0,elCoordenadas.y);
    },2200)
  }
  else if(id == "li_habilidade"){
    
   Menu();
     tempo = setTimeout(Box1,800)
     tmp = setTimeout(()=>{
    // selecionar elemento
     let el = document.getElementById('habilidades');
     // utiliza método
     let elCoordenadas = el.getBoundingClientRect();

    window.scrollTo(0,elCoordenadas.y);
    },2200)
  }

  else{
       
   Menu();
   tempo = setTimeout(Box1,800)
   tmp = setTimeout(()=>{
  // selecionar elemento
   let el = document.getElementById('contato');
   // utiliza método
   let elCoordenadas = el.getBoundingClientRect();

  window.scrollTo(0,elCoordenadas.y);
  },2200)
  }
}

window.addEventListener("load",Inicial);