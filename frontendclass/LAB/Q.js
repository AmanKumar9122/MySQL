function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumbers(arr));



function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(arr)); // Output: 10



function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(arr));



function elementExists(arr, target) {
    return arr.includes(target);
}
console.log(elementExists(arr,5));
console.log(elementExists(arr, 11));



function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let arrWithDuplicates = [1, 2, 2, 3, 4, 5, 5, 6];
console.log(removeDuplicates(arrWithDuplicates)); 

