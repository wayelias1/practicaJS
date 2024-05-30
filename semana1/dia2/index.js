//Escribe un programa que le pida al usuario una calificación (0-100) y muestre la letra correspondiente (A, B, C, D, F).

//Nota: utilizar PROMPT para la peticion del numero

const a = 20;
const b = 40;
const c = 60;
const d = 80;
const e = 100;

let usuario = prompt("Cual es tu calificacion para obtener tu letra en la nota")

if(usuario <= 0){
    alert("Ingrese a la web del estudiante para retirarse de la uni.")
}
else if(usuario <= 20){
    alert("Tu nota es E")
}
else if(usuario <= 40){
    alert("Tu nota es D")
}
else if(usuario <= 60){
    alert("Tu nota es C")
}
else if(usuario <= 80){
    alert("Tu nota es B")
}
else if(usuario <= 100){
    alert("Tu nota es A")
}
else if(usuario > 100){
    alert("Vaya a la nasa, mentiroso")
}
else{
    alert("vaya a estudiar vago")
}