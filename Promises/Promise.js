//  Promises make handling asynchronous operations like API calls, file loading, or time delays easier
//  by providing a cleaner and more manageable way to work with them compared to traditional callback functions.
//  A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
//  and its resulting value. It can be in one of three states: pending, fulfilled, or rejected.




let promiseCase = new Promise((res,rej)=>{
      setTimeout(()=>{
            let error = false;
            if(!error){
                  res({
                        message: "OK everything under conrtol",
                        code: "200"
                  })
            }
            else{
                  rej({
                        message: "Sorry! something wrong",
                        code: "500"
                  })
            }
      },3000)
})
console.log(promiseCase);

promiseCase
.then((date)=>{
      console.log(date);
      return date.message
})
.then((msg)=>{
      console.log(msg + " i dont know");
})
.catch((error)=>
      { console.log(error);
})