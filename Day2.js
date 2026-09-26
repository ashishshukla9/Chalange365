 const arr = [1,[2],3,[4,5],6,[7,8]];

 function flatten(arr){
let result = []; // Empty Array

for(let item of arr){ // yaha pe mene of use kiya h kyunki js me of values deta h agar mujhe position batana hota to me yaha pe in ka use karta tha 
    if(Array.isArray(item)){ 
        result= result.concat(flatten(item));
    }else{
        result.push(item);
    }
}
return result;
 }
 console.log(flatten(arr));