
//summation
function sum() {
    
    var input1 = document.querySelector('.input-1').value || 0; 
    var input2 = document.querySelector('.input-2').value || 0; 
    var sumAmount = document.querySelector('.sumAmount');

    var summation = parseInt(input1) + parseInt(input2);
    
    sumAmount.innerText = 'Your Total Amount is ' + summation + ' BDT!';
}

//Subtraction
function subtraction() {
    
    var input3 = document.querySelector('.input-3').value || 0; 
    var input4 = document.querySelector('.input-4').value || 0; 
    var subAmount = document.querySelector('.subAmount');

    var subtraction = parseInt(input3) - parseInt(input4);
    
    subAmount.innerText = 'Your Total Amount is ' + subtraction + ' BDT!';
}

//Multiplication
function multiplication() {
    
    var input5 = document.querySelector('.input-5').value || 0; 
    var input6 = document.querySelector('.input-6').value || 0; 
    var mulAmount = document.querySelector('.mulAmount');

    var multiplication = parseInt(input5) * parseInt(input6);
    
    mulAmount.innerText = 'Your Total Amount is ' + multiplication + ' BDT!';
}

//Division
function division() {
    
    var input7 = document.querySelector('.input-7').value || 0; 
    var input8 = document.querySelector('.input-8').value || 0; 
    var divAmount = document.querySelector('.divAmount');

    var division = parseInt(input7) / parseInt(input8);
    
    divAmount.innerText = 'Your Total Amount is ' + division + ' BDT!';
}

