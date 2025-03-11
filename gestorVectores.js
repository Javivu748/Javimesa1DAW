
//crea una funcion para calcular el numero de impares
function calcularImpares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            contador++;
            }
            }
            return contador;
}
//crear una funcion que haga el sumatorio de numeros
function sumatorio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        }
        return suma;
}
//crea una funcion que haga la multiplicacion de numeros
function multiplicacion(arr) {
    let resultado = 1;
    for (let i = 0; i < arr.length; i++) {
        resultado *= arr[i];
    }
    return resultado;
}
//crea una funcion que haga la media de los numeros
function media(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        }
        let resultado = suma / arr.length;
        return resultado;
}

numero= prompt("introduce numero: ")

console.log(numero.calcularImpares)