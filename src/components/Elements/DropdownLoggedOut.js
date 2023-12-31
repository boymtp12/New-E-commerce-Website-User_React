import React from "react";
import { Link } from "react-router-dom";

const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <div
      style={{position: 'absolute', top:'30px', left: 0}}
      className="select-none absolute top-12 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="py-2 block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white  "
          >
            Mua sắm
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/login"
            className="py-2 block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white "
          >
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="register"
            className="py-2 block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white "
          >
            Đăng ký
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownLoggedOut;
