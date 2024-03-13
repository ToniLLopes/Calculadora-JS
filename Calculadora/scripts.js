function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){   
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        history.push(`${resultado} = ${eval(resultado)}`);
        updateHistory();
    }else{
        document.getElementById('resultado').innerHTML = "Erro";
    }
}
let historyDiv = document.getElementById('history');
let history = [];
function updateHistory() {
    historyDiv.innerHTML = '';
    history.forEach(entry => {
      historyDiv.innerHTML += entry + '<br>';
    });
  }