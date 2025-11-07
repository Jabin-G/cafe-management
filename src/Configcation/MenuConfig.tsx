const MenuConfig = [
    {
        title: "Dashboard",
        path: "/",
        icon: "🏠",
    },
    {
        title: "Users",
        path: "/users",
        icon: "👤",
    },
    {
        title: "Reports",
        path: "/reports",
        icon: "📊",
        children: [
            { title: "Monthly", path: "/reports/monthly" },
            { title: "Annual", path: "/reports/annual" },
        ],
    },
    {
        title: "Settings",
        path: "/settings",
        icon: "⚙️",
    },
];

export default MenuConfig;
