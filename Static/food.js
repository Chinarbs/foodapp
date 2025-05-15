function placeOrder() {
    const customer = document.getElementById("customer").value;
    const foodSelect = document.getElementById("food");
    const foodId = foodSelect.value;
    const foodName = foodSelect.options[foodSelect.selectedIndex].text;
    const foodPrice = foodSelect.options[foodSelect.selectedIndex].dataset.price;

    if (!customer || !foodId) {
        alert("Please enter your name and select a food item.");
        return;
    }

    document.getElementById("order-summary").innerText =
        `✅ ${customer}, you ordered ${foodName}. Total: ₱${foodPrice}.`;
    
    // Show progress bar and simulate delivery
    document.getElementById("delivery-status").style.display = "block";
    simulateDelivery();
}

function simulateDelivery() {
    let progress = 0;
    const progressBar = document.getElementById("progress");
    const progressText = document.getElementById("progress-text");

    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";

        if (progress === 30) progressText.innerText = "On the way...";
        if (progress === 70) progressText.innerText = "Almost there...";
        if (progress >= 100) {
            progressText.innerText = "Delivered!";
            clearInterval(interval);
        }
    }, 500);
}
