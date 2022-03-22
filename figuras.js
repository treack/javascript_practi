function perimetroCuadrado(lado){
  return  lado * 4;  
}

function areaCuadrado(lado){
    return lado * lado;
}  

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){    
    return (base * altura) / 2;
} 

function alturaTrianguloIsosceles(lado, base){    
    const data = (lado * lado)  - ((base* base) / 4);    
    return  Math.sqrt(data);
}

const radioCirculo = 4;
const PI = Math.PI;

function diametroCirculo(radio){
  return radio * 2;
}  

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio) * PI;
    return diametro;
} 


function areaCirculo(radio){
    return (radio * 2 ) * PI ;
}  


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputAltura");
    const altura = input.value;

    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = diametroCirculo(value);
    alert(area);
}

function calcularAlturaTrianguloIsosceles(){
    const input = document.getElementById("InputLado1");
    const lado = input.value;

    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputBase");
    const base = input3.value;


    if(lado1 != lado2){
        console.log("los lados a y b no son iguales");
    }else{
        const altura = alturaTrianguloIsosceles(lado, base);
        alert(altura);
    }    
}