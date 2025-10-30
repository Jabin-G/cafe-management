import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import LineChart, { DashboardCharts, RevenueDoughnut } from './LineChart';

function Home() {
    return (
        <main className="space-y-6">
            <h1 className="text-xl font-semibold text-gray-800">Real-time overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                    { title: 'Daily', value: 300, icon: <BsFillArchiveFill className="text-blue-500" /> },
                    { title: 'Weekly', value: 12, icon: <BsFillGrid3X3GapFill className="text-green-500" /> },
                    { title: 'Monthly', value: 33, icon: <BsPeopleFill className="text-purple-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-red-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-yellow-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-yellow-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-yellow-500" /> },
                    { title: 'Alerts', value: 42, icon: <BsFillBellFill className="text-yellow-500" /> },
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow-sm p-0 h-flex flex items-center justify-center text-gray-400">
                    <DashboardCharts />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-0 h-flex flex items-center justify-center text-gray-400">
                    <LineChart />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-0 h-100 flex items-center justify-center text-gray-400">
                    <RevenueDoughnut />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Running tables</h2>
                <table className="w-full text-left text-gray-600">
                    <thead>
                        <tr className="border-b">
                            <th className="pb-2">Product</th>
                            <th className="pb-2">Date</th>
                            <th className="pb-2">Amount</th>
                            <th className="pb-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Espresso', date: 'Oct 20, 2025', amount: '$4.50', status: 'Paid' },
                            { name: 'Latte', date: 'Oct 21, 2025', amount: '$3.80', status: 'Pending' },
                            { name: 'Mocha', date: 'Oct 22, 2025', amount: '$5.20', status: 'Paid' },
                        ].map((order, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="py-2">{order.name}</td>
                                <td>{order.date}</td>
                                <td>{order.amount}</td>
                                <td>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Home;
