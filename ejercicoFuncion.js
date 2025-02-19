//funcion a la que pasamos un vector numero y que os devuelve la media

function calcularMedia(vector){
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
        }
        return suma / vector.length;
}