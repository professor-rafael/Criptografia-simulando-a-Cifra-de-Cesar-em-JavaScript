let mapa = {
    "a" : "m",
    "b" : "p",
    "c" : "f",
    "d" : "l",
    "e" : "u",
    "f" : "y",
    "g" : "e",
    "h" : "t",
    "i" : "a",
    "j" : "o",
    "k" : "g",
    "l" : "z",
    "m" : "c",
    "n" : "h",
    "o" : "k",
    "p" : "w",
    "q" : "j",
    "r" : "s",
    "s" : "n",
    "t" : "d",
    "u" : "i",
    "v" : "b",
    "w" : "x",
    "x" : "v",
    "y" : "r",
    "z" : "q",
  };
  
  function codificaMapeamento(palavra) {
    let mensagem = "";
    
    for(let caractere of palavra) {
      if(mapa[caractere]) {
        mensagem = mensagem + mapa[caractere];
      } else {
        mensagem = mensagem + caractere;
      }
    }
    
    return mensagem;
  }
  
  
  let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  
  function codifica(palavra) {
    
    let mensagem = "";
    
    for(let caractere of palavra) {
      let posicao = alfabeto.indexOf(caractere);
      
      if(posicao == -1) {
        mensagem = mensagem + caractere;
      } else {
        let novaPosicao = posicao + 13;
        let codificado = alfabeto[novaPosicao];
        mensagem = mensagem + codificado;
      }
  
    }
    
    return mensagem;
  }
  
  function setup() {
    createCanvas(1800, 600);
    let palavra = prompt("Qual palavra deseja codificar?");
    
    background("grey");
    console.log(palavra);
    let codificado = codificaMapeamento(palavra);
    console.log(codificado);
    
    fill("black");
    textSize(78);
    textAlign(CENTER, CENTER);
    text(codificado, width / 2, height / 2);
    
    noLoop();
  }
  
  function draw() {
    
  }
