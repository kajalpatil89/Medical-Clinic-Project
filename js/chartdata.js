const ctx = document.getElementById('visitChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Patient Visits',
      data: [110, 150, 125, 180, 170],
      backgroundColor: 'rgba(0, 123, 167, 0.6)'
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
