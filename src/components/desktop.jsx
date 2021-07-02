import React, { useEffect } from 'react';
import styled from 'styled-components';
import Mountains from 'Images/bg.webp';
import Dock from './dock';
import MenuBar from './menubar';
import AppWindows from './appwindows';

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${Mountains});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
`;

const AppWindowWrapper = styled.div`
  height: calc(100vh - 23px - 5.2rem);
`;

const Desktop = () => (
  <DesktopWrapper>
    <MenuBar />
    <AppWindowWrapper>
      <AppWindows />
    </AppWindowWrapper>
    <Dock />
  </DesktopWrapper>
);

export default Desktop;
