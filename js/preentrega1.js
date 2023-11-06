function validarUsuario() { 
let edad = parseInt(prompt("¿Que edad tenes?")); 
while(isNaN(edad)) { // Valido que sea un número, caso contrario pido que vuelva ingresar una edad válida.
    alert("Por favor, ingresa una edad válida.");
    edad=parseInt(prompt("¿Que edad tenes?"));
    }
if(edad >= 18){ // si cumple la condición de ser mayor o igual a 18 años pregunto el nombre. Sino se le pide que vuelva cuando sea mayor de edad.
    let nombre = prompt("¿Como es tu nombre?"); 
    //while(nombre.length <3 || nombre.trim()===""){ // Inicio un bucle While que va a cortar cuando se cumplan la condición de que el nombre no sea menor 3 caracteres o no sea vacio.
    while(nombre.length <3 || nombre.trim()===""){    
    alert("Volve a ingresar tu nombre");
        nombre = prompt("¿Como es tu nombre?") 
    }
    alert("¡Bienvenida/o " + nombre + " a MODELAR IDEAS!");
    
    for (let i=10; i>0 ; i-- ){ // Ciclo FOR donde el cliente podrá moverse en un máximo de 10 veces entre las opciones de las 3 asesorias. 
        let opcion = (prompt(
            `\n Elegí que tipo de asesoria queres:
            \n 1- Asesoria Express
            \n 2- Asesoria Intermedia
            \n 3- Asesoria Integral
            \n Escribe "ESC" para salir`));
        if (opcion==1){
            alert("Elegiste la asesoria Express");
        }else if (opcion==2){
            alert("Elegiste la asesoria Intermedia");
        }else if (opcion==3){
            alert("Elegiste la asesoria Integral");
        }else if (opcion=="ESC" || opcion=="esc" || opcion=="Esc"){ //El ciclo se corta cuando escriben "ESC" o "esc".
            alert("¡Gracias por visitarnos!");
            break;
        }else {
            alert("Opción no válida.");
        }
        }   
    }else{
        alert("Volvé cuando seas mayor de edad. ¡Muchas Gracias!");
    }
}
validarUsuario();

