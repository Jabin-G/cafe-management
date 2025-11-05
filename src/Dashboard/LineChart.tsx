import { Doughnut as DoughnutChart, Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

const LineChart = () => {
    const lineData = {
        labels: ["Mon", "Thurs", "Wednes", "Tues", "Fri", "Satur", "Sun"],
        datasets: [
            {
                label: "Daily Sales",
                data: [300, 400, 800, 600, 900, 1200, 1400],
                borderColor: "#f59e0b",
                backgroundColor: "rgba(245, 158, 11, 0.2)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-4 h-64 flex items-center justify-between text-gray-400 space-x-4">
            <div className="flex-1 h-full flex items-center justify-center">
                <Line data={lineData} options={options} />
            </div>
        </div>
    );
};

export default LineChart;

export const DashboardCharts = () => {
    const barData = {
        labels: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8"],
        datasets: [
            {
                label: "Weekly Sales",
                data: [1200, 1900, 3000, 500, 2000, 3000, 5000, 6000],
                backgroundColor: "#3b82f6",
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-4 h-64 flex items-center justify-between text-gray-400 space-x-4">
            <div className="flex-1 h-full flex items-center justify-center">
                <Bar data={barData} options={options} />
            </div>
        </div>
    );
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export const RevenueDoughnut = () => {
    const DoughnutData = {
        labels: ["Coffee", "breakfast", "lunch", "Dinner"],
        datasets: [
            {
                label: "Month sales",
                data: [35, 25, 25, 15],
                backgroundColor: [
                    "rgba(99, 102, 241, 0.8)",
                    "rgba(236, 72, 153, 0.8)",
                    "rgba(250, 204, 21, 0.8)",
                    "rgba(34, 197, 94, 0.8)",
                ],
                borderWidth: 2,
                borderColor: "#fff",
                hoverOffset: 12,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "bottom",
                labels: { color: "#333", font: { size: 14 } },
            },
        },
        cutout: "65%",
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-5 h-80 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-3">Revenue Distribution</h2>
            <DoughnutChart data={DoughnutData} options={options} />
        </div>
    );
};