// GRAPH CHIFFRE D'AFFAIRE DE L'ANNEE

const labels = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Chiffre d\'affaire de l\'année',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: false
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// FIN GRAPH CHIFFRE D'AFFAIRE DE L'ANNEE


// GRAPH PRODUIT LE PLUS VENDU

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);

// FIN GRAPH PRODUIT LE PLUS VENDU


// GRAPH
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
);
// FIN GRAPH


// GRAPH
const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config
);
// FIN GRAPH
