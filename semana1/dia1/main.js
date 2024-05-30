const nums = document.querySelectorAll('.btnNum')
const deletAll = document.querySelector('#deletAll');
const deleteStep = document.querySelector('#deleteStep');
let input = document.querySelector('#input');
const igualdad = document.querySelector('#igual');
const result = document.querySelector('.result');


//Detecta el numero seleccionado y lo agrega
nums.forEach(num => {
    num.addEventListener("click", function(){
        //console.log(num.value)
        input.value += num.value
    })
})

//Borra todo el resultasdo
deletAll.addEventListener("click", function(){
    input.value = '';
})

//Borra ultimo digito agregado
deleteStep.addEventListener("click", function(){
    input.value = input.value.substring(0, input.value.length - 1); 
})


igualdad.addEventListener("click", function(){
    result.innerHTML = eval(input.value)
})