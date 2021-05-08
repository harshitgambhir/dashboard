import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = ({setCollapsed}) => {
  return (
    <nav className=" w-full bg-transparent flex-row flex-nowrap justify-start flex items-center">
      <div className="w-full items-center flex justify-between flex-nowrap md:px-10">
        <button onClick={() => setCollapsed(false)} className="focus:outline-none p-4 cursor-pointer md:hidden text-xl leading-none outline-none">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="flex-row flex justify-center items-center md:ml-auto p-4">
          <div className="flex-row list-none items-center flex">
            <div className="w-12 h-12 text-sm font-semibold bg-blueGray-200 inline-flex items-center justify-center rounded shadow">
              HG
            </div>
          </div>
          <div
            className="text-sm inline-block font-semibold pl-4"
          >
            Harshit Gambhir
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
