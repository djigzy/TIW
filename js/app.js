function renderChart(data) {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Active Users',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    values: [12, 19, 3, 5, 2, 3]
};

document.addEventListener("DOMContentLoaded", function() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        values: [12, 19, 3, 5, 2, 3]
    };
    renderChart(data);
});
