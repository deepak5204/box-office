/*eslint-disable*/

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { LinkStyled, NavList } from './Navs.styled';

// import { useLocation } from 'react-router-dom';

const LINKS = [
  {to: '/', text: 'Home'},
  {to: '/starred', text: 'starred'}
]


function Navs() {
const location = useLocation();
console.log(location);

  return (
    <div>
      <NavList>
        {
          LINKS.map((item) => (
             <LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}> {item.text}</LinkStyled>
          ))
        }
      
      </NavList>
    </div>
  )
}

export default Navs;
