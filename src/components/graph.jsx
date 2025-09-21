import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Graph = ({ dataset = [] }) => {
  if (!dataset || dataset.length === 0) return <p>Loading graph...</p>

  const data = {
    labels: dataset.map(d => d.date),
    datasets: [
      {
        label: 'Pokémon Index Value',
        data: dataset.map(d => d.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.3
      },
    ],
  }

    const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { 
        display: true,
        position: 'bottom' // move legend to bottom
        },
        tooltip: { enabled: true },
    },
    scales: {
        y: { beginAtZero: true },
    },
    }


  return <div className="w-full h-64"><Line data={data} options={options} /></div>
}

export default Graph
