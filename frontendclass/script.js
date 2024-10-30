document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting and reloading the page
    convertToWords();
});

function convertToWords() {
    const inputField = document.getElementById("numberInput").value.trim();
    const resultField = document.getElementById("word");

    if (isNaN(inputField) || inputField === "") {
        resultField.value = "Not a number";
        return;
    }

    const number = parseInt(inputField, 10);

    if (number < 0 || number > 999) {
        resultField.value = "Out of range";
    } else {
        resultField.value = inputField.split('').map(digitToWord).join(' ');
    }
}

function digitToWord(digit) {
    const digitWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return digitWords[digit];
}
