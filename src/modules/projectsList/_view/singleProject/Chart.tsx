import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
interface ChartProps {
    projectName: string; // The name of the project passed as a prop
    progress: number; // The project's current progress (0 to 100)
}


const Chart = ({ projectName, progress }: ChartProps) => {
    const data = {
        labels: [projectName],
        datasets: [
            {
                label: 'Net Profit',
                data: [progress],
                backgroundColor: '#3b82f6',
                borderColor: '#3b82f6',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
};

export default Chart;
