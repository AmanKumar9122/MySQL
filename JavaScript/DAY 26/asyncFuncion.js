// async function greet() {
//     throw "404 page not found";
//     return "Hello!";
//     // throw "some random error";
//     // abc.abc();
// }

// greet()
// .then(()=>{
//     console.log("promise was resolved"); 
//     console.log("result was :",result);

// })
// .catch((err)=>{
//     console.log("promise was rejected with err :",err);
// })

// let demo = async() =>{return 5;}


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();  
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}

