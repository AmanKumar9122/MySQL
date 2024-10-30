let num =[1,2,3,4,5];
let double = num.map((el)=>{
    console.log(el*2);
});

let num2 =[1,2,3,4,5];
let square = num.map((el2)=>{
    console.log(el2*el2);
});

let num3 = [1,2,3,4,7,8,2,9,10,12,11];
let ans = num.filter((el) => {
    console.log(el % 2 == 0);
});

let num4 = [1,2,3,4,7,8,2,9,10,12,11];
let ans1 = num.filter((el) => {
    console.log(el % 2 != 0);
});
