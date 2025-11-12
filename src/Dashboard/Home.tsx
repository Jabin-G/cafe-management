import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import LineChart, { DashboardCharts, RevenueDoughnut } from './LineChart';
import { LuClock11 } from "react-icons/lu";
import { Ri24HoursFill } from "react-icons/ri";
import { LiaCalendarWeekSolid } from "react-icons/lia";

function Home() {
    const overviewCards = [
        { title: 'Hours', value: 20, icon: LuClock11, color: 'text-blue-500', percent: '+5.2%' },
        { title: 'Daily', value: 240, icon: Ri24HoursFill, color: 'text-green-500', percent: '+2.1%' },
        { title: 'Weekly', value: 1680, icon: LiaCalendarWeekSolid, color: 'text-purple-500', percent: '+8.5%' },
        { title: 'Monthly', value: 11760, icon: BsFillGrid3X3GapFill, color: 'text-red-500', percent: '+12.3%' },
    ];

    const statsCards = [
        { title: 'Daily', value: 300, icon: BsFillArchiveFill, color: 'text-blue-500' },
        { title: 'Weekly', value: 12, icon: BsFillGrid3X3GapFill, color: 'text-green-500' },
        { title: 'Monthly', value: 33, icon: BsPeopleFill, color: 'text-purple-500' },
        { title: 'Alerts', value: 42, icon: BsFillBellFill, color: 'text-red-500' },
    ];

    const recentOrders = [
        { name: "Espresso", date: "Oct 20, 2025", amount: "₹120", status: "Pending" },
        { name: "Latte", date: "Oct 20, 2025", amount: "₹150", status: "Paid" },
        { name: "Cappuccino", date: "Oct 21, 2025", amount: "₹160", status: "Paid" },
        { name: "Americano", date: "Oct 21, 2025", amount: "₹130", status: "Paid" },
        { name: "Mocha", date: "Oct 22, 2025", amount: "₹170", status: "Paid" },
        { name: "Café au lait", date: "Oct 22, 2025", amount: "₹155", status: "Pending" },
        { name: "Cortado", date: "Oct 23, 2025", amount: "₹140", status: "Paid" },
        { name: "Flat White", date: "Oct 23, 2025", amount: "₹165", status: "Paid" },
        { name: "Macchiato", date: "Oct 24, 2025", amount: "₹150", status: "Paid" },
        { name: "Affogato", date: "Oct 24, 2025", amount: "₹200", status: "Paid" },
        { name: "Cold Brew", date: "Oct 25, 2025", amount: "₹180", status: "Pending" },
        { name: "Nitro Cold Brew", date: "Oct 25, 2025", amount: "₹210", status: "Paid" },
        { name: "Irish Coffee", date: "Oct 26, 2025", amount: "₹250", status: "Paid" },
        { name: "Turkish Coffee", date: "Oct 26, 2025", amount: "₹190", status: "Paid" },
        { name: "Vienna Coffee", date: "Oct 27, 2025", amount: "₹220", status: "Pending" },
        { name: "Ristretto", date: "Oct 27, 2025", amount: "₹135", status: "Paid" },
        { name: "Doppio", date: "Oct 28, 2025", amount: "₹160", status: "Paid" },
        { name: "Red Eye", date: "Oct 28, 2025", amount: "₹170", status: "Paid" },
        { name: "Café Bombón", date: "Oct 29, 2025", amount: "₹185", status: "Paid" },
        { name: "Frappuccino", date: "Oct 29, 2025", amount: "₹210", status: "Pending" },
        { name: "Iced Latte", date: "Oct 30, 2025", amount: "₹175", status: "Paid" },
        { name: "Caramel Macchiato", date: "Oct 30, 2025", amount: "₹195", status: "Paid" },
        { name: "Cinnamon Mocha", date: "Oct 31, 2025", amount: "₹185", status: "Paid" },
        { name: "Pumpkin Spice Latte", date: "Oct 31, 2025", amount: "₹205", status: "Pending" },
    ];


    return (
        <main className="space-y-6 p-full bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold text-gray-800">Real-time Overview</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {overviewCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-600 font-medium">{card.title}</h3>
                                <Icon className={`text-2xl ${card.color}`} />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-800 mt-3">{card.value}</h1>
                            <span className="text-green-500 mt-1 text-sm">{card.percent}</span>
                        </div>
                    )
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                    <LineChart />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                    <DashboardCharts />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                    <RevenueDoughnut />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-600 font-medium">{card.title}</h3>
                                <Icon className={`text-2xl ${card.color}`} />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mt-3">{card.value}</h1>
                        </div>
                    )
                })}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
                <div className="max-h-96 overflow-y-auto border rounded-xl">
                    <table className="w-full text-left text-gray-600">
                        <thead className="sticky top-0 bg-white z-10">
                            <tr className="border-b">
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-2">{order.name}</td>
                                    <td className="px-4 py-2">{order.date}</td>
                                    <td className="px-4 py-2">{order.amount}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'Paid'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t py-6 mt-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                    <div className="flex space-x-6 mt-3 md:mt-0">
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Support</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Help Center</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Privacy</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Terms</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Home;
