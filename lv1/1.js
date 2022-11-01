function myPush(){
   
   for(var i =1;i<arguments.length+1;i++){
  arguments[i]=i;
   arr.push(arguments[i]);
   } 
}
let arr = [1];
myPush(1,2,3,4,5);
console.log(arr)
