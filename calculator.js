let Portion_number = document.getElementById('Portion_number').value;

console.log(Portion_number);

function calculator(x) {
    let result = x * Portion_number;
    result = result.toFixed(2);
    return result;
}

console.log(calculator(15));
