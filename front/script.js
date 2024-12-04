document.addEventListener("DOMContentLoaded", () => {
    // Sample Data for Dashboard
    const data = {
        labels: ["Income", "Expenses", "Savings"],
        datasets: [
            {
                label: "Finance Overview",
                data: [5000, 3000, 2000],
                backgroundColor: ["#007BFF", "#FF5733", "#28A745"],
            },
        ],
    };

    const config = {
        type: "doughnut",
        data: data,
    };

    // Render Chart
    const financeChart = new Chart(document.getElementById("financeChart"), config);

    // Handle Login Form
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login Successful!");
    });
});
