import React from "react";

const MenuActionComponent = () => {
    return (
        <div className="group inline-block cursor-pointer">
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li className="">
                <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                >Xóa</a
                >
            </li>
        </ul>
    </div>
    );
}
export default MenuActionComponent;