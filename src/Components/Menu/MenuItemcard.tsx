import type { MenuItem } from "../Types/Meun";

export default function MenuItemCard({ item }: { item: MenuItem }) {
    return (
        <div className="bg-white shadow rounded p-4 border hover:shadow-lg">
            {item.image && (
                <img
                    src={item.image}
                    className="rounded mb-2 w-full h-32 object-cover"
                />
            )}

            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>

            <p className="text-green-600 font-semibold">
                From ${item.basePrice.toFixed(2)}
            </p>

            <div className="mt-2">
                <p className="font-semibold text-sm mb-1">Variants</p>
                {item.variants?.length ? (
                    item.variants.map((v) => (
                        <p key={v.id} className="text-sm text-gray-600">
                            - {v.name}: ${v.price.toFixed(2)}
                        </p>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No variants</p>
                )}
            </div>

            <div className="mt-2">
                <p className="font-semibold text-sm mb-1">Add-ons</p>
                {item.addons?.length ? (
                    item.addons.map((a) => (
                        <p key={a.id} className="text-sm text-gray-600">
                            - {a.name}: +${a.price.toFixed(2)}
                        </p>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No add-ons</p>
                )}
            </div>

            <p
                className={`mt-3 text-sm font-bold ${item.available ? "text-green-500" : "text-red-500"
                    }`}
            >
                {item.available ? "Available" : "Not available"}
            </p>
        </div>
    );
}
