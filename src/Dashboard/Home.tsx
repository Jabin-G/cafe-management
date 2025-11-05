import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import LineChart, { DashboardCharts, RevenueDoughnut } from './LineChart';
import { LuClock11 } from "react-icons/lu";
import { Ri24HoursFill } from "react-icons/ri";
import { LiaCalendarWeekSolid } from "react-icons/lia";


function Home() {
    return (
        <main className="space-y-6">
            <h1 className="text-xl font-semibold text-gray-800">Real-time overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                    { title: 'hours', value: 20, icon: <LuClock11 className="text-blue-500" /> },
                    { title: 'Daily', value: 240, icon: <Ri24HoursFill className="text-green-500 " /> },
                    { title: 'Weekly', value: 1680, icon: <LiaCalendarWeekSolid className="text-purple-500" /> },
                    { title: 'Monthly', value: 11760, icon: <BsFillGrid3X3GapFill className="text-red-500" /> },
                ].map((card, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-5 flex flex-col hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-600 font-medium">{card.title}</h3>
                            <span className="text-2xl">{card.icon}</span>
                        </div>
                        <h1 className="font-bold text-gray-800 mt-3 text-7xl">{card.value}</h1>
                        <span className="text-green-600 ml-1 grid-cols-1">▲ +5.2%</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow-sm p-0 h-flex flex items-center justify-center text-gray-400">
                    <LineChart />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-0 h-flex flex items-center justify-center text-gray-400">
                    <DashboardCharts />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-0 h-100 flex items-center justify-center text-gray-400">
                    <RevenueDoughnut />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                    { title: 'Daily', value: 300, icon: <BsFillArchiveFill className="text-blue-500" /> },
                    { title: 'Weekly', value: 12, icon: <BsFillGrid3X3GapFill className="text-green-500" /> },
                    { title: 'Monthly', value: 33, icon: <BsPeopleFill className="text-purple-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-red-500" /> },
                ].map((card, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-5 flex flex-col hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-600 font-medium">{card.title}</h3>
                            <span className="text-2xl">{card.icon}</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mt-3">{card.value}</h1>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Running tables</h2>

                {/* Scrollable Table Container */}
                <div className="max-h-96 overflow-y-auto border rounded-lg">
                    <table className="w-full text-left text-gray-600">
                        <thead className="sticky top-0 bg-white z-10">
                            <tr className="border-b">
                                <th className="pb-2 px-3">Product</th>
                                <th className="pb-2 px-3">Date</th>
                                <th className="pb-2 px-3">Amount</th>
                                <th className="pb-2 px-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Espresso', date: 'Oct 20, 2025', amount: '$4.50', status: 'Pending' },
                                { name: 'Latte', date: 'Oct 20, 2025', amount: '$4.50', status: 'Paid' },
                                { name: 'Cappuccino', date: 'Oct 20, 2025', amount: '$4.50', status: 'Paid' },
                                { name: 'Americano', date: 'Oct 20, 2025', amount: '$4.50', status: 'Paid' },
                                { name: 'Mocha', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Cortado', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Espresso', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Mocha', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: ' Flat white', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Caffè macchiato', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Cold brew', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Affogato', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Café au lait', date: 'Oct 22, 2025', amount: '$5.20', status: 'Pending' },
                                { name: 'Frappe', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Ristretto', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Doppio', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Red Eye', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Turkish coffee', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Irish coffee', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Irish coffee', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Irish coffee', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                                { name: 'Irish coffee', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                            ].map((order, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-3">{order.name}</td>
                                    <td className="px-3">{order.date}</td>
                                    <td className="px-3">{order.amount}</td>
                                    <td className="px-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'Paid'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-yellow-100 text-yellow-600'}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="bg-white border-t py-6 mt-auto sticky bottom-0">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>

                    <div className="flex space-x-6 mt-3 md:mt-0">
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Support</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Help Center</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Privacy</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </main >
    );
}

export default Home;
