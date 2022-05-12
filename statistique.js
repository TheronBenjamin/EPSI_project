const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    // options: {},
    options: {
        responsive: false
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
);

const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config
);

