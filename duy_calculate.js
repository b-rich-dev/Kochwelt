function validateInput() {
    let inputField = document.getElementById("input");
    let value = parseInt(inputField.value);

    // Falls der Wert nicht innerhalb des erlaubten Bereichs liegt, korrigieren
    if (isNaN(value) || value < 0) {
        inputField.value = 0;
    } else if (value > 20) {
        inputField.value = 20;
    }
}


function calculate() {
    let inputNumber = parseFloat(document.getElementById("input").value) || 1; // Standardwert 1
    let numberOneElement = document.getElementById("numberOne");
    let numberTwoElement = document.getElementById("numberTwo");
    let numberThreeElement = document.getElementById("numberThree");
    let numberFourElement = document.getElementById("numberFour");
    let numberFiveElement = document.getElementById("numberFive");

    // Ursprüngliche Werte aus den "data-original"-Attributen holen
    let originalNumberOne = parseFloat(numberOneElement.getAttribute("data-original"));
    let originalNumberTwo = parseFloat(numberTwoElement.getAttribute("data-original"));
    let originalNumberThree = parseFloat(numberThreeElement.getAttribute("data-original"));
    let originalNumberFour = parseFloat(numberFourElement.getAttribute("data-original"));
    let originalNumberFive = parseFloat(numberFiveElement.getAttribute("data-original"));
    

    // Berechnung und Aktualisierung der Werte im HTML
    numberOneElement.textContent = (originalNumberOne * inputNumber).toFixed(0);
    numberTwoElement.textContent = (originalNumberTwo * inputNumber).toFixed(0);
    numberThreeElement.textContent = (originalNumberThree * inputNumber).toFixed(0);
    numberFourElement.textContent = (originalNumberFour * inputNumber).toFixed(0);
    numberFiveElement.textContent = (originalNumberFive * inputNumber).toFixed(0);
}