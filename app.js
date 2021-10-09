
var box1 = document.getElementById('box1'); //Parte inicial

document.getElementById('btn-ver-projeto').addEventListener("click",Box1); //Botão ver projetos

var icone_sobe_header = document.getElementById('seta-box-header'); // Icone que aparece quando clica no menu
icone_sobe_header.addEventListener("click",Menu);  // Chamada da função Menu, após o clique

var boxheader = document.getElementById('box-header'); // Box responsavel pelo o header

var box2 = document.getElementById('box2'); //Box onde fica os projetos e as demais sections

var icone_menu = document.getElementById("i_menu"); // Icone menu que aparece assim na tela inicial
icone_menu.addEventListener('click',Menu); // Chamada da função Menu, após o clique

var icone_arrow = document.getElementById('icone_seta'); // Icone que aprece assim que clica no botao ver projetos
icone_arrow.addEventListener('click', ReverseBox1);  // Chamada da funçao para voltar tela inicial


var ul = document.getElementById('ul'); // Responsavel pela lista não ordenada que fica no menu

var header = document.getElementById("header"); // Header por si só


document.getElementById("li_sobre").addEventListener("click",Sobre); //Aqui é o li sobre do menu

document.getElementById("li_habilidades").addEventListener("click",Sobre); //Aqui é o li habilidades do menu

document.getElementById("li_contato").addEventListener("click",Sobre); //Aqui é o li contato do menu


//Função para fazer a transição do Box, após o clique no botão ver projetos
function Box1(){
  document.body.style.padding="none"
  document.body.style.margin="none"
  document.body.style.width=""
  document.body.style.height=""

  box1.style.height="57px";  
  ul.style.display="none"; 
  icone_sobe_header.style.display="none"
  tmp = setTimeout(
    ()=>{
       boxheader.style.justifyContent="center";
       icone_menu.style.display="none";
       icone_arrow.style.display="inline-block";
       box2.style.display="flex"; 
    },900);
}


//Função para fazer a transição do Box, após o clique na seta, para voltar tela inicial 
function ReverseBox1(event){
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

//Função para mostar o menu
var cont = 0
function Menu(){
  if(cont == 0){
    var altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     ul.style.display="flex";
     header.style.height=altura+"px";
     header.style.backgroundColor="cornflowerblue";
     header.style.border="1px solid";
     icone_menu.innerHTML="";
     icone_sobe_header.style.display="flex";

  cont = 1;
  }
  else{
     ul.style.display="none";
     header.style.height="3rem";
     icone_menu.innerHTML="menu";
     header.style.backgroundColor="";
     header.style.border="";
     icone_sobe_header.style.display="none";

  cont = 0;
  }
}


//Funçao para fazer a rolagem da tela até o id informado!

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

   }else if(id == "li_habilidades"){
    
       Menu();
       tempo = setTimeout(Box1,800)
       tmp = setTimeout(()=>{
       // selecionar elemento
       let el = document.getElementById('habilidades');
       // utiliza método
       let elCoordenadas = el.getBoundingClientRect();

       window.scrollTo(0,elCoordenadas.y);
      },2200)

  }else{
       
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


function Inicial(){
  document.body.style.padding="0"
  document.body.style.margin="0"
  document.body.style.width="100%"
  document.body.style.height="100%"
}

 
window.addEventListener("load",Inicial);



//Criação do objeto com as informações do projeto1
/*
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
"https://lista-de-tarefas-personalizada.netlify.app"];   */