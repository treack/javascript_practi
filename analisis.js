//utilis - helpers
function esPar(numero){
    return (numero % 2 === 0);
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

//calculadora de medianan
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//mediana general
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//mediana del top 10
const spliceStrat = ((salariosColSorted.length * 90) / 100);
const spliceConut = salariosColSorted.length - spliceStrat;

const salariosColTop10 = salariosColSorted.splice(spliceStrat, spliceConut);

const medianaTopCol = medianaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol,
    medianaTopCol,
);