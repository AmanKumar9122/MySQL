// let arr = [1,2,3,4,5];

// // arrow function

// arr.forEach((el)=>{
//         console.log(el);
//     });

//normal function

// arr.forEach(function(el){
//     console.log(el);
// });

// or

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

let arr = [
    {
        name:"Aman",
        age:20,
    },
    {
        name:"Rahul",
        age:19,
    },
    {
        name:"Rajat",
        age:23,
    },
];
arr.forEach((student)=>{
    console.log(student.age);
});