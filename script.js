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

let numberOne = 0;
let operatorPick = '';
let numberTwo = 0;

let displayValue = document.querySelector('#result-bar');


function pressNumber() {

    numbers.forEach(function(i) {
        i.addEventListener('click', function(e) {
            
            if (operatorPick == 0) {
            numberOne += e.target.textContent; 
            numberOne = Number(numberOne);
            displayValue.textContent = numberOne;
        
        }
           else if (operatorPick != 0) {
               numberTwo += e.target.textContent;
               numberTwo = Number(numberTwo);
               displayValue.textContent = numberTwo;
           }
         })

    })
};

     









function pressOperator() {
    operators.forEach(function(i) {
        i.addEventListener('click', function(e) {
               operatorPick += e.target.textContent; 
               
                })
            })
        
        }
        
        


     

        pressNumber();
        pressOperator();

    
    
    
 
  




  

    function operate(a, b, c) {
        let result = 0; 
        if (b == '+') {
      
            result = add(a, c); 
           
           operatorPick = '';  
           numberOne = result; 
           numberTwo = 0; 
           displayValue.textContent = result; 
           return result; 
           
       
          
        } 
        else if (b == '-') {

             result = subtract(a, c);
             operatorPick = '';
             numberOne = result; 
             numberTwo = 0;
            displayValue.textContent = result; 
            return result; 

        }
        else if (b == '/') {

            result = divide(a, c);
            operatorPick = '';
            numberOne = result; 
            numberTwo = 0;
            displayValue.textContent = result; 
            return result; 
        }
        else if (b == '*') {

            result = multiply(a, c);
            operatorPick = '';
            numberOne = result; 
            numberTwo = 0;
            displayValue.textContent = result; 
            return result; 
        }
        
    }; 

    equalKey.addEventListener('click', () =>
    operate(numberOne, operatorPick, numberTwo)
    ); 

    function clear() {
    clearKey.addEventListener('click', function() { 
        numberOne = 0;
        numberTwo = 0;
        operatorPick = '';
        
        return displayValue.textContent = '';
    }
        )};

        clear();
      

        

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

