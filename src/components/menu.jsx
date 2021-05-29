import React, { useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { menuAtom } from '../atoms/index.atom';

const Menu = styled.div`
  text-transform: capitalize;
`;

const MenuContents = styled.ul`
  position: absolute;
  background-color: hsla(240, 24%, 100%, 0.3);
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 11px 0, 0 0 0 0 white;
  list-style: none;
  padding: 10px;
  backdrop-filter: blur(25px);
  margin-top: 25px;
  border-radius: 5px;
  z-index: 10;
`;

const MenuContent = styled.li`
  padding: 5px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
    color : hsla(240,3%,11%);
  ${(props) => props.break && 'border-bottom : 1px solid hsla(240,3%,11%,0.3); '}
  text-align: left;
  font-size: 15px;
  min-width: 100px;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
    border-radius: 4px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  width: 100%;
  justify-content: center;
  padding :0px 10px;
  ${(props) => props.active && ' background:hsla(240, 24%, 100%, 0.3)'};
  border-radius : 3px;
`;
const MenuWrapper = ({ type, currentApp, options }) => {
  const [activeMenu, setActiveMenu] = useAtom(menuAtom);
  return (
    <MenuContainer active={activeMenu === options.name}>
      <Menu
        onClick={() => setActiveMenu(options.name)}
        onMouseOver={() => activeMenu && setActiveMenu(options.name)}
      >
        {options.name}
      </Menu>
      {activeMenu === options.name && (
        <MenuContents>
          {options.options.map((option) => (
            <MenuContent break={option.break}>{option.name}</MenuContent>
          ))}
        </MenuContents>
      )}
    </MenuContainer>
  );
};

export default MenuWrapper;
