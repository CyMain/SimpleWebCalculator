let equ = localStorage.getItem('equation')||` `;

const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '/', '='];

buttons.forEach((button)=>{
  if(button == '='){
    document.querySelector('.buttons').innerHTML += `
    <button onclick="
          solveEqu('${button}');
          ">
          ${button}
    </button>
  `;
  } else{
    document.querySelector('.buttons').innerHTML += `
    <button onclick="
          addToEqu('${button}');
          ">
          ${button}
    </button>
  `;
  }
})

console.log(document.querySelector('.buttons').innerHTML);

function addToEqu(value){
  if(value == '+'||value == '-'||value == '*'||value == '/'){
    equ+=` ${value} `;
  } else{
    equ+=`${value}`;
    if(equ[equ.length - 3] == '+' || equ[equ.length - 3] == '*' || equ[equ.length - 3] == '/' || equ[equ.length - 3] == '-'){
      document.querySelector('.output').innerHTML = eval(equ);
      document.querySelector('.output').classList.add('transparent');
    }
  }
  console.log(equ);
  document.querySelector('.current-eq').innerHTML = equ;
}

function solveEqu(){
  try {
    document.querySelector('.output').innerHTML = eval(equ);
    console.log(eval(equ)); 
    document.querySelector('.output').classList.remove('transparent');
  } catch (error) {
    document.querySelector('.output').innerHTML = 'please complete your expression.';
    console.log('terrible equ~');
  }
  
}

function clearEqu(){
  equ = ` `;
  document.querySelector('.current-eq').innerHTML = '';
  document.querySelector('.output').innerHTML = '';
}