function delay(time, message) {
  return new Promise((resolve, reject) =>
  {
    if(true)
    {
      resolve(setTimeout(() => {
      console.log(message);
    }, time))
    }
    else{
      reject('error')
    }
  
  }
  )};

delay(2100, "Hello after 2s")
setTimeout(()=> console.log('timeOut'),2100);
console.log('hello');

