const promise = new Promise((resolve,reject)=>{
   const success = false;

   if(success){
    resolve("Data received");
   }else{
    reject("Not received");
   }
});

promise.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})