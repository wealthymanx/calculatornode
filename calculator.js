// Append a character to the input field
function appendToInput(char) {
    document.getElementById("input").value += char;
}

// Clear the input field and any error message
function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").textContent = "";
}

// Calculate the result of the expression
function calculate() {
    let input = document.getElementById("input").value;
    try {
        let result = eval(input);
        document.getElementById("input").value = result;
        document.getElementById("result").textContent = result;
        appendToHistory(input + ' = ' + result);
    } catch (error) {
        document.getElementById("result").textContent = "Error: Invalid expression";
    }
}

// Toggle the sign of the value in the input field
function toggleNeg() {
    let input = document.getElementById("input");
    try {
        let value = eval(input.value);
        input.value = value * -1;
    } catch (error) {
        document.getElementById("result").textContent = "Error: Invalid expression";
    }
}

// Clear the entire history
function clearHistory() {
    document.getElementById("history").innerHTML = "";
    appendToHistory("----clear----");
}

// Append calculation to history
function appendToHistory(calculation) {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML += calculation + "<br>";
    historyElement.scrollTop = historyElement.scrollHeight; // Scroll to bottom
}

// Toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

// Append a decimal to the input field
function appendDecimal() {
    let input = document.getElementById("input");
    if (!input.value.includes('.')) {
        input.value += '.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set the initial theme based on system preference 
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    // Listen for the theme toggle switch
    document.getElementById("theme-toggle").addEventListener('change', function(event) {
        toggleTheme();
        const themeLabel = document.getElementById("theme-label");
        themeLabel.textContent = document.body.classList.contains("dark-theme") ? "Dark Theme" : "Light Theme";
    });
});