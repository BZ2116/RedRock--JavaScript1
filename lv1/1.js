function myPush(){
   
   for(var i =0;i<arguments.length;i++){
   arr.push(arguments[i]);
   } 
}
let arr = [1];
myPush(1,2,3,4,5);
console.log(arr)
