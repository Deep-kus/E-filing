import React, { useState } from 'react';
import { MenuItems1 } from './MenuItems1';
import './Dropdown1.css';


function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems1.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a

                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;