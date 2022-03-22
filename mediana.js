const lista = [
    40, 20, 10, 50
];

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }
    return false;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    const order =  lista.sort(function(a,b){return a -b;});
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){
        const elemento1 = order[mitad - 1];
        const elemento2 = order[mitad];
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    }else{
        mediana= order[mitad];
    }
    return mediana;

}
