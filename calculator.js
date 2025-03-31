const object = {};
const originalValues = {};

let a = document.getElementById("ingredients_id");
let ingredient_count = a.getElementsByTagName("div").length;

function get_ingredient() {
    for (let i = 1; i <= ingredient_count; i++) {
        let element = document.getElementById("ingredient_" + i);
        if (element) {
            object["x" + i] = element;
            originalValues["x" + i] = parseFloat(element.innerText);
        }
    }
}

function claculate_ingredient() {
    for (let i = 1; i <= ingredient_count; i++) {
        if (originalValues["x" + i] > 0) {
            calculator(i);
        }
    }
}

function calculator(y) {
    let Portion_number = parseFloat(document.getElementById('Portion_number').value);
    let result = originalValues["x" + y] * Portion_number / 4;
    result = parseFloat(result.toFixed(2));
    object["x" + y].innerText = result;

    return result;
}
