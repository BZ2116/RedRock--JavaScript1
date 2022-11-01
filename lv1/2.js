   
  //方法一： （转字符串）
// let arr = [1,[2,3],[4,5,[6,7,8]],9];
// function flatten(arr) {
//     return arr.toString();
    
// }
// let b =[flatten(arr)];
// console.log(b)



//方法二：（递归）

let arr = [1,[2,3],[4,5,[6,7,8]],9];
function flatten(arr) {
    let res = []
    //isArray 判断是否为数组
    arr.map((value) => {
        if(Array.isArray(value)){
            // 如果是，就遍历   concat：连接两个或多个数组，再将value值进行flatten函数运算，将数组扁平化
            res = res.concat(flatten(value));
        } else {
            //如果不是就直接加在数组后面
            res.push(value);
        }
    })
    return res;
    
}
console.log(flatten(arr))

