// Promise handle with asyn await

const promiseCase1 = new Promise((res,rej)=>{
      setInterval(()=>{
            let error = false;
            if(!error){
                  res({
                        user_id: "313#%#%$42348",
                        password: "Dont try to be smart",
                        code: "200"
                  })
            }
            else{
                  rej({
                        message: "Fuck Off",
                        code: "500"
                  })
            }
      },3000)
})

async function onPromiseCase1(){
      try{
            const response = await promiseCase1
            console.log(response);
            
      }catch(error){
            console.log(error);
      }
}

onPromiseCase1();

