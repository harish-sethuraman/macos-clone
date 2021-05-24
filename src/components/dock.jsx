import React from 'react';
import styled from 'styled-components';
import { useMotionValue } from 'framer-motion';
import { useAtom } from 'jotai';
import DockItem from './dockitem';
import { openAppList } from '../atoms/index.atom';

const DockWrapper = styled.section`
  position: fixed;
  margin-bottom: 0.3rem;
  bottom: 0;
  left: 0;
  z-index: 9900;
  width: 100%;
  height: 4rem;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`;

const DockContainer = styled.div`
  background-color: hsla( 240, 24%, 100%, 0.4);
  box-shadow: inset 0 0 0 0.2px hsla( 0, 0%, 96%, 0.7),0 0 0 0.2px hsla(0, 0%, 13%, 0.7),
    hsla(0, 0%, 0%, 0.3) 2px 5px 19px 7px;
  position: relative;
  padding: 0.3rem;
  border-radius: 1.2rem;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const Dock = () => {
  const mouseX = useMotionValue(null);
  const [appList] = useAtom(openAppList);

  return (
    <DockWrapper id="dock">
      <DockContainer>
        {Object.keys(appList).map((item) => (
          <DockItem key={item} mouseX={mouseX} item={item} />
        ))}
      </DockContainer>
    </DockWrapper>
  );
};

export default Dock;
