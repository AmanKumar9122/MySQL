// function savetoDb(data) {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         console.log("your data was saved");
//     } else {
//         console.log("weak connection. data not saved");
//     }
// }

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Aman",
//   () => {
//     console.log("Your data was saved.");
//     savetoDb(
//       "helloWorld",
//       () => {
//         console.log("Success2:data 2 Saved");
//         savetoDb(
//           "helloWorld",
//           () => {
//             console.log("Success3:data 3 Saved");
//           },
//           () => {
//             console.log("Failure3:data 3 Saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2:data 2 Saved");
//       }
//     );
//   },
//   () => {
//     console.log("Weak connection. Data not saved.");
//   }
// );

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
};

// let request = savetoDb("Aman");
// request
// .then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })


// savetoDb("Aman")
// .then(()=>{
//     console.log("promise was resolved 1");
//     savetoDb("Aman2")
//     .then(()=>{
//         console.log("promise was resolved 2");
//     })
//     .catch(()=>{
//         console.log("promise was rejected 2");
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected 1");
// })

// Improved Version
// savetoDb("apnacollege")
//     .then(() => {
//         console.log("promisel resolved");
//         return savetoDb("hello world");
//     })
//     .then(() => {
//         console.log("promise2 resolved");
//     })
//     .catch(() => {
//         console.log("some promise rejected");
//     });

savetoDb("apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise: ", result);
        return savetoDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise: ", result);
        return savetoDb("shradha");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    });/
