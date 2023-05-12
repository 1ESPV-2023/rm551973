function insereNumeroNoVisor(btn, idVisor) {
    let visor = document.getElementById(idVisor);
    let lastChar = visor.value.slice(-1);
    let operators = ['+', '-', '*', '/'];
    if (operators.includes(lastChar) && operators.includes(btn.value)) {
      return;
    }
    visor.value += btn.value;
  }
  

function resultadoDasOperacoes(idVisor) {
    let visor = document.getElementById(idVisor);
    let resultado = eval(visor.value);
    visor.value = resultado;
}

function limpaVisor(idVisor) {
    let visor = document.getElementById(idVisor);
    visor.value = "";
}
