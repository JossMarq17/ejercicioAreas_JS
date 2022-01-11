//Actividad
//Area circulo

function circulo(radio, pi, resultado){
    var radio = 10;
    var pi = 3.1416;
    var resultado = radio * radio * pi;
    alert("El área del circulo es: " + resultado);
}
circulo();

//Area rectangulo
function rectangulo(base, altura,resultado){
    var base = 15;
    var altura = 25;
    var resultado = base * altura;
    console.log("El resultado es: " + resultado);
}
rectangulo();

//Area triangulo
function triangulo(base, altura, resultado){
    var resultado = (base * altura) / 2;
    alert("El área del triangulo es: " + resultado);
}
triangulo(5, 10);

//Otra forma de resolver el ejercicio

function circulo(pi, radio, resultado){
    var resultado = pi * (radio*radio);
    alert(resultado);
    }

circulo(3.1416, 10);

function rectangulo(base, altura, resultado){
    var resultado = base * altura;
    alert(resultado);
    }
    
rectangulo(3, 4);

function triangulo(base, altura, resultado){
        var resultado = (base * altura)/2;
        alert(resultado);
        }
        
triangulo(3, 4);