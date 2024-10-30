// let string = '{"fact":"When your cats rubs up against you, she is actually marking you as hers with her scent. If your cat pushes his face against your head, it is a sign of acceptance and affection.","length":137}'
// // console.log(string);
// let validRes = JSON.parse(string);
// console.log(validRes.fact);



let url = "https://catfact.ninja/fact";
 async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("error -",e);
    }
    console.log("bye");
 }


// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log(data2);
//     })
//     .catch((err)=>{
//         console.log("ERROR -",err);
//     });


