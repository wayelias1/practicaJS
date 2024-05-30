let resultado = prompt('ingrese su nota para que le digamos su calificacion')

if(resultado < 21 && resultado > 0){
    console.log('Tu nota es E');
}
else if(resultado <= 40 && resultado > 20 ){
    console.log('Tu nota es D')
}
else if(resultado <= 60 && resultado > 40 ){
    console.log('Tu nota es C')
}
else if(resultado <= 80 && resultado > 60 ){
    console.log('Tu nota es B')
}
else if(resultado <= 100 && resultado > 80 ){
    console.log('Tu nota es A')
}
else if(resultado < 0){
    console.log('JA que bruto pongale 0')
}
else{
    console.log('dame de la droga que fumas')
}