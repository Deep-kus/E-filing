import React, { useState } from 'react';
import { MenuItems2 } from './MenuItems2';
import './Dropdown2.css';


function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems2.map((item, index) => {
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

export default Dropdown2;