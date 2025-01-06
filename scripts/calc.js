let equ = localStorage.getItem('equation')||` `;

function addToEqu(value){
  if(value == "+"||value == "-"||value == "*"||value == "/"){
    equ+=` ${value} `
  } else{
    equ+=`${value}`;
    if(equ[equ.length - 3] == "+" || equ[equ.length - 3] == "*" || equ[equ.length - 3] == "/" || equ[equ.length - 3] == "-"){
      document.querySelector('.output').innerHTML = eval(equ);
    }
  }
  console.log(equ);
  document.querySelector('.current-eq').innerHTML = equ;
}

function solveEqu(){
  try {
    document.querySelector('.output').innerHTML = eval(equ);
    console.log(eval(equ)); 
  } catch (error) {
    document.querySelector('.output').innerHTML = 'please complete your expression.';
    console.log('terrible equ~');
  }
  console.log(equ.length);
  console.log(equ[3]);
}