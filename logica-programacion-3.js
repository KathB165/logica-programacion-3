let numero = parseInt(prompt('Hola ingrese un numero para encontrar su factorial'));

function Factorial (numero){
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        
        return numero * Factorial(numero - 1);
    }
    }

let  resultado = Factorial(numero);

console.log(`El factorial del numero  ${numero} es: ${resultado}`);
document.write(`El factorial del numero  ${numero} es: ${resultado}`)
;
