import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faHome, faShoppingCart, faThLarge, faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  Link,
  useLocation
} from "react-router-dom";

const Navbar = ({collapsed, setCollapsed}) => {
  const location = useLocation();
  return (
    <nav className={`${collapsed ? '-translate-x-full' : 'translate-x-0'} transform ease-in-out transition-all duration-300 md:translate-x-0 left-0 fixed top-0 bottom-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow bg-white items-center justify-between w-64 z-10 py-4 px-6`}>
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 flex justify-between w-full mx-auto">
        <div className="flex flex-row justify-between">
          <Link
            className="block text-left text-blueGray-600 mr-0 whitespace-nowrap text-sm uppercase font-bold p-4"
            to="/"
          >
            Dashboard
          </Link>
          <button onClick={() => setCollapsed(true)} className="focus:outline-none cursor-pointer md:hidden p-3 text-xl leading-none outline-none">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="flex flex-col items-stretch opacity-100 relative mt-4 shadow-none top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded">
          <ul className="flex-col min-w-full flex list-none">
            {[
              {
                name: 'Home',
                path: '/',
                icon: faHome
              },
              {
                name: 'Categories',
                path: '/categories',
                icon: faThLarge
              },
              {
                name: 'Products',
                path: '/products',
                icon: faBoxOpen
              },
              {
                name: 'Orders',
                path: '/orders',
                icon: faShoppingCart
              }
            ].map((menu) => {
              return (
                <li className="items-center text-sm" key={menu.path}>
                  {
                    menu.path === location.pathname?
                    <Link
                      className="bg-blueGray-100 py-3 px-3 font-bold block text-lightBlue-500"
                      to={menu.path}
                    >
                      <FontAwesomeIcon icon={menu.icon} className="opacity-75"/>
                      <span className="ml-4">{menu.name}</span>
                    </Link>
                    :
                    <Link
                      className="py-3 px-3 font-bold block"
                      to={menu.path}
                    >
                      <FontAwesomeIcon icon={menu.icon} className="opacity-75 text-blueGray-700"/>
                      <span className="ml-4 text-blueGray-400">{menu.name}</span>
                    </Link>
                  }
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
