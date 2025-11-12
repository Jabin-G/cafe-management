import { useState } from "react";

function LeaveTracker() {
    const [leaveType, setLeaveType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({
            leaveType,
            startDate,
            endDate,
        });
        alert(`Leave applied for: ${leaveType} from ${startDate} to ${endDate}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
        >
            <h2 className="text-xl font-semibold text-gray-800 text-center">
                Leave Tracker
            </h2>

            {/* Leave Type */}
            <div>
                <label className="block text-gray-700 font-medium mb-2">Leave Type</label>
                <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                >
                    <option value="">Select Leave Type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Earned Leave">Earned Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                    />
                </div>
            </div>

            {/* Submit Button aligned right */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-200"
                >
                    Leave Tracker
                </button>
            </div>
        </form>
    );
}

export default LeaveTracker;
