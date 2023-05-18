/* let add = function sum(a) {
    let somma = 0; 
 for (let i = 0; i < a.length; i++) {
    
    a[i] = Number(a[i]); 
     if(isNaN(a[i]) == true) {
         a[i] = 0;
         
     }somma += Number(a[i]);
 } return somma; 
} */
/* function sum(a) {
    let somma = 0; 
 for (let i = 0; i < a.length; i++) {
     if (a[i] == '+') {
         a.pop(); 
         
     }somma += Number(a[i]);
 } return somma; }

 */

 let add = function sum(a, b) {
     return a + b; 
 };

let subtract = function subtract(a, b) {
    return a - b; 
};

let multiply = function(a, b) {
    return a * b; 
};

let divide = function(a, b) {
    return a / b; 
};



let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equalKey = document.querySelector('.equal');
let clearKey = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');


let numberOne = '';
let operatorPick = '';
let numberTwo = '';
let operatorPickTwo = '';
let decimalPoint = '.'; 

let displayValue = document.querySelector('#result-bar');


function pressNumber() {

    numbers.forEach(function(i) {
        i.addEventListener('click', function(e) {
            
            if (operatorPick == '') {
            numberOne += e.target.textContent; 
          
            displayValue.textContent = numberOne;
        
        }
           else if (operatorPick != '') {
               numberTwo += e.target.textContent;
             
               displayValue.textContent = numberTwo;
           }
         
         })

    })
};

     
function addDecimal(number) {
    if (number.includes(decimalPoint)) {
    let finalNumber = '';
    let indexOfPoint = number.indexOf('.');
    
    let indexStart = number.indexOf(number[0]);
    let firstPart = number.slice(indexStart, indexOfPoint + 1);
    let secondPart = number.slice(indexOfPoint + 1);
    console.log(firstPart);
    console.log(secondPart);
   
   secondPart = secondPart.replaceAll('.', ''); 
 
    
       
        console.log(secondPart);
        finalNumber = firstPart + secondPart; 
       
        return finalNumber;   
    }
}











function pressOperator() {
    operators.forEach(function(i) {
        i.addEventListener('click', function(e) {
            if (operatorPick == '') {
               operatorPick += e.target.textContent; 
            } else if (operatorPick != '') {
                operatorPickTwo += e.target.textContent; 
                operate(numberOne, operatorPick, numberTwo); 
                operatorPick = operatorPickTwo; 
                operatorPickTwo = ''; 
            }
                })
            })
        
        }
        
        


     

      
    
    
    
 
  


 

  

    function operate(a, b, c) {
        let result = 0; 
         
        a = Number(a);
        c = Number(c); 
        if (b == '/' && c == 0) {
            displayValue.textContent = 'Can\'t do it';
            result = ''; 
            numberOne = result; 
            numberTwo = ''; 
            return result;
        }
        else if (b == '+') {
         
            result = add(a, c); 
            
          result = result.toFixed(2); 
           result = Number(result); 
           operatorPick = '';  
           numberOne = result; 
           numberTwo = ''; 
           displayValue.textContent = result; 
           return result; 
           
       
          
        } 
        else if (b == '-') {

             result = subtract(a, c);
             result = result.toFixed(2); 
             result = Number(result);
             operatorPick = '';
             numberOne = result; 
             numberTwo = '';
            displayValue.textContent = result; 
            return result; 

        }
        else if (b == '/') {

            result = divide(a, c);
            result = result.toFixed(2); 
            result = Number(result);
            operatorPick = '';
            numberOne = result; 
            numberTwo = '';
            displayValue.textContent = result; 
            return result; 
        }
        else if (b == '*') {

            result = multiply(a, c);
             result = result.toFixed(2); 
             result = Number(result);
            operatorPick = '';
            numberOne = result; 
            numberTwo = '';
            displayValue.textContent = result; 
            return result; 
        }
        
    }; 

    equalKey.addEventListener('click', () =>
    operate(numberOne, operatorPick, numberTwo)
    ); 

    function clear() {
    clearKey.addEventListener('click', function() { 
        numberOne = '';
        numberTwo = '';
        operatorPick = '';
        operatorPickTwo = '';
        displayValue.textContent = ''; 
        
        displayValue.textContent = '';
    }
        )};

 
        clear();
        pressNumber();
        pressOperator();
       
        

/*let savedValues = [];

let num1; 
let num2; 
let operator; 

let btn = document.querySelectorAll('button');

console.log(btn);

btn.forEach(function(i) {
     i.addEventListener('click', function(e) {

        displayValue.textContent = e.target.textContent;
        
       
        savedValues.push(e.target.textContent);
        savedValues[0] = num1;
        savedValues[1] = num2; 
        console.log(savedValues);

        if (e.target.textContent == clearKey) {
            savedValues = []; 
            displayValue.textContent = '';
        }
      
        else if (e.target.textContent == equalKey)  {
            for (let i = 0; i < savedValues.length; i++) {
                if (savedValues[i] == '+') {
                    displayValue.textContent = add(savedValues);
                } 
               
        }
    }
      })
      
}); */

