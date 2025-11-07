import MenuItem from "./MenuItem";
import MenuConfig from "./MenuConfig";

const MenuList = () => {
    return (
        <div className="menu-list">
            {MenuConfig.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
};

export default MenuList;
