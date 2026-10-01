const display = document.getElementById("display");

// Number ya operator display mein add karna
function addValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Display clear karna
function clearDisplay() {
    display.value = "0";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

// Calculation karna
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}