import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,   // <-- import bar element
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,  // <-- register bar element
  Title,
  Tooltip,
  Legend
)

const Graph = ({ dataset = [] , question }) => {
  if (!dataset || dataset.length === 0) return <p>Loading graph...</p>

  const data = {
    labels: dataset.map(d => d.date),
    datasets: [
      {
        type: 'line',
        label: `${question} Index Value`,
        data: dataset.map(d => d.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.3,
        yAxisID: 'y', // line uses main y-axis
      },
      {
        type: 'bar',
        label: 'Trade Volume',
        data: dataset.map(d => d.volume),
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        yAxisID: 'y1', // separate axis for volume
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true,
        position: 'bottom',
      },
      tooltip: { enabled: true },
    },
    scales: {
      y: { 
        beginAtZero: true,
        position: 'left',
        title: { display: true, text: 'Index Value' }
      },
      y1: { 
        beginAtZero: true,
        position: 'right',
        grid: { drawOnChartArea: false }, // keep grids separate
        title: { display: true, text: 'Trade Volume' }
      }
    },
  }

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  )
}

export default Graph
