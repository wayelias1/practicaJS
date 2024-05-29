const nums = document.querySelectorAll('.btnNum')
const deletAll = document.querySelector('#deletAll');
const deleteStep = document.querySelector('#deleteStep');
let result = document.querySelector('#resultado');

//Detecta el numero seleccionado y lo agrega
nums.forEach(num => {
    num.addEventListener("click", function(){
        console.log(num.value)
        result.value += num.value
    })
})

//Borra todo el resultasdo
deletAll.addEventListener("click", function(){
    result.value = '';
})

//Borra ultimo digito agregado
deleteStep.addEventListener("click", function(){
    result.value = result.value.substring(0, result.value.length - 1);
    console.log( )
})