document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Validate inputs
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage <= 0) {
        alert('Please enter a valid tip percentage.');
        return;
    }

    // Calculate tip and total bill
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;

    // Display the result
    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalBill').textContent = totalBill.toFixed(2);

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
});
