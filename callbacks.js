function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}


function calc(num1, num2, callback) { //generator operations to calque.
    return callback(num1, num2);
};
setTimeout(()=> console.log(calc(1,2,rest)),2000);


function gretting(name){console.log(`Hola ${name}`);}
setTimeout(() => gretting('David'),2000);

