let add = function(a, b) {
    return a + b; 
};

let subtract = function(a, b) {
    return a - b; 
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

let display = document.querySelector('#result-bar');


let btn = document.querySelectorAll('button');

console.log(btn);
btn.forEach(function(i) {
     i.addEventListener('click', function(e) {

        alert(e.target.innerHTML);
         /* let digit = document.createElement('p');
         digit.textContent = e.target.textContent;
         display.appendChild(digit);  */
     })
});

