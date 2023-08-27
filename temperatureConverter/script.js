document.getElementById("convert").addEventListener("click", function() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheit").value);

    if (!isNaN(celsiusInput)) {
        const fahrenheitResult = (celsiusInput * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheitResult.toFixed(2);
    } else if (!isNaN(fahrenheitInput)) {
        const celsiusResult = (fahrenheitInput - 32) * 5 / 9;
        document.getElementById("celsius").value = celsiusResult.toFixed(2);
    }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
});