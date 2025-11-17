import type { MenuItem } from "../Types/Meun";
import MenuItemCard from "../Menu/MenuItemcard";

interface Props {
    menu: MenuItem[];
}

const MenuList = ({ menu }: Props) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {menu.map(item => (
                <MenuItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MenuList;
