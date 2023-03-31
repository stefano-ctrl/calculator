let add = function sum(a) {
    let somma = 0; 
 for (let i = 0; i < a.length; i++) {
    
    a[i] = Number(a[i]); 
     if(isNaN(a[i]) == true) {
         a[i] = 0;
         
     }somma += Number(a[i]);
 } return somma; 
}
/* function sum(a) {
    let somma = 0; 
 for (let i = 0; i < a.length; i++) {
     if (a[i] == '+') {
         a.pop(); 
         
     }somma += Number(a[i]);
 } return somma; }

 */

let subtract = function subtract(a) {
    let sottrazione = 0;
    let i = 0; 
    while (i < a.length) {
        a[i] = Number(a[i]);

        if(isNaN(a[i]) == true) {
            a[i] = 0; 
        } console.log(sottrazione -= Number(a[i]));
        i++; 
    } return sottrazione; 
};

let multiply = function(a, b) {
    return a * b; 
};

let divide = function(a, b) {
    return a / b; 
};

let operate = function(a, b, c) {
    
    return a(b, c);
}




let displayValue = document.querySelector('#result-bar');
let equalKey = document.querySelector('.equal-btn').textContent;
let clearKey = document.querySelector('.clear-btn').textContent; 

let savedValues = [];

let btn = document.querySelectorAll('button');

console.log(btn);

btn.forEach(function(i) {
     i.addEventListener('click', function(e) {

        displayValue.textContent = e.target.textContent;
       
        savedValues.push(e.target.textContent);
        
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
      
});

