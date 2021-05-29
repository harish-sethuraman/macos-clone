import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AppleIcon, ControlCenterIcon } from 'Icons/icons';
import { useAtom } from 'jotai';
import TimeAndDate from './timeanddate';
import { currentApp, menuAtom } from '../atoms/index.atom';
import ControlCenterMenu from './controlcentermenu';
import Menu from './menu';
import { menuLists, useOutsideClick } from './helper';

const MenuBarWrapper = styled.div`
  display: flex;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.3);
  height: 23px;
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  display: flex;

  align-items: center;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  padding: 1px 10px;
  text-transform: capitalize;
  font-weight: 500 !important;
  font-size: 14px;
`;

const ControlCenter = styled.span`
  height: 16px;
  width: 16px;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 200px;
`;

const MenuBar = () => {
  const [activeApp] = useAtom(currentApp);

  const [showMenu, toggleMenu] = useState(false);
  const menuRef = useRef();
  const [, setActiveMenu] = useAtom(menuAtom);

  useOutsideClick(menuRef, () => setActiveMenu(''));
  return (
    <MenuBarWrapper id="menu">
      <LeftMenu>
        <AppleIcon />
        {activeApp && (
          <MenuWrapper ref={menuRef}>
            {menuLists(activeApp).map((options) => (
              <Menu activeApp={activeApp} options={options} />
            ))}
          </MenuWrapper>
        )}
      </LeftMenu>
      <RightMenu>
        <ControlCenter onClick={() => toggleMenu(!showMenu)}>
          <ControlCenterIcon />
          {showMenu && <ControlCenterMenu />}
        </ControlCenter>
        <Text>
          <TimeAndDate />
        </Text>
      </RightMenu>
    </MenuBarWrapper>
  );
};

export default MenuBar;
