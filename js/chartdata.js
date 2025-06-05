
const ctx = document.getElementById('visitChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024'],
    datasets: [{
      label: 'Patient Visits',
      data: [110, 150, 125, 180, 170],
      backgroundColor: 'rgba(0, 150, 136, 0.7)' // cyan-blue shade
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Visits',
          font: {
            size: 14
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  }
});
