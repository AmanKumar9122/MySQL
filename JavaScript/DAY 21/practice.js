// let nums = [10,20,30,40];
// let ans = nums.every((el)=>el%10==0);
// console.log(ans);

let nums = [10,20,30,40,5];
let min = nums.reduce((min,el)=>{
    if(min<el){
        return min;
    } else {
        return el;
    }
});

console.log(min);