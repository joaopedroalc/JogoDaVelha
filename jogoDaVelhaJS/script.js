let letras = ["/assets/x.jpg", "/assets/o.jpg"];

var turno = {
  atual: 0,
  get:function(){
    return this.atual
  },
  set:function(val){
    this.atual = val
  }
}

var x = [];
var o = [];

var jogo = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

function checar(jogador){
  var count = 0;

  for(var l1 = 0; l1 < jogo.length; l1++){
    for(var l2 = 0; l2 < jogo[l1].length; l2++){
      for(var l3 = 0; l3 < jogador.length; l3++){
        if(jogo[l1][l2] === jogador[l3]){
          count++;

          if(count === 3 && turno.get() === 1){
            alert('X ganhou')
            resetar()
          }else if(count === 3 && turno.get() === 0){
            alert('O ganhou')
            resetar()
          }
        }

      }
    }
  }
  count = 0;
}

if(x.length + o.length === 9){
  alert('Deu velha!!')
  resetar()
}

function resetar(){

}

let p1 = document.querySelector('.p1').innerHTML
let p2 = document.querySelector('.p2').innerHTML
let p3 = document.querySelector('.p3').innerHTML
let p4 = document.querySelector('.p4').innerHTML
let p5 = document.querySelector('.p5').innerHTML
let p6 = document.querySelector('.p6').innerHTML
let p7 = document.querySelector('.p7').innerHTML
let p8 = document.querySelector('.p8').innerHTML
let p9 = document.querySelector('.p9').innerHTML


function j1() {
  if(p1 === ""){
    if(turno.get() === 0){
      p1 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p1 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j2() {
  if(p2 === ""){
    if(turno.get() === 0){
      p2 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p2 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j3() {
  if(p3 === ""){
    if(turno.get() === 0){
      p3 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p3 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j4() {
  if(p4 === ""){
    if(turno.get() === 0){
      p4 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p4 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j5() {
  if(p5 === ""){
    if(turno.get() === 0){
      p5 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p5 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j6() {
  if(p6 === ""){
    if(turno.get() === 0){
      p6 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p6 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j7() {
  if(p7 === ""){
    if(turno.get() === 0){
      p7 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p7 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j8() {
  if(p8 === ""){
    if(turno.get() === 0){
      p8 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p8 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};

function j9() {
  if(p9 === ""){
    if(turno.get() === 0){
      p9 = `<img src="${letras[0]}" class="active">`
    turno.set(1)
    x.push(1)
    checar(x)
  }else if(turno.get() === 1){
    p9 = `<img src="${letras[1]}" class="active">`
    turno.set(0)
    o.push(1)
    checar(o)
  }
}};