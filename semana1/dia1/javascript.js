let calculadora = document.querySelector('.resultadoCompleto');

let resultado = document.querySelector('#resultado');

let botones = document.querySelectorAll('.boton');

let borrar1 = document.querySelector('.borrar1');

let borrar2 = document.querySelector('.borrar2');

let submit = document.querySelector('.submit');

botones.forEach( boton =>{
    boton.addEventListener('click',() =>{
        resultado.value += boton.value;
        } )
    }
);

submit.addEventListener('click', () =>{
    calculadora.innerHTML = eval(resultado.value);
} );

borrar2.addEventListener('click',() =>{
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
})

borrar1.addEventListener('click', ()=>{
    resultado.value = "";
})

