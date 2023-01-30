const btn = document.querySelector('.btn');
//btn
const onClick =() => console.log('Click');
btn.addEventListener('click', onClick );
setTimeout(() => console.log('TimeOut'),5000);
setTimeout(()=> console.log('TimeOutNew'),5000);
const one = () => Promise.resolve('one');
const ones = () => Promise.resolve('ones Promise');


async function secondFunction()
{
    const secondPRO = await ones();
    console.log(secondPRO);
}


async function Isfunction()
{
    console.log('syn part');
    const Myasyn = await one();
    b = 2; 
    console.log(b);
    console.log(Myasyn);
}

console.log('hi')
const second = () => console.log('second??');
second();
secondFunction();
Isfunction();
console.log('third??');
//Exercise about how to work the piece of code from event loop (occurrences)

