import React from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { openAppList, currentApp } from '../atoms/index.atom';

const DraggableMenuWrapper = styled.div`
  width: 100%;
  height: 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: sticky;
  z-index: 99999;
  top: -25px;
  border: 1px solid #bdbdbd;
`;
const Close = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #ff5f56;
  border-color: #e0443e;
`;
const Minimize = styled.div`
  height: 12px;
  width: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #ffbd2e;
  border-color: #dea123;
`;
const Maximize = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-left: 5px;

  background-color: #27c93f;
  border-color: #1aab29;
`;
const IconCollection = styled.div`
  padding: 6px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;
const DraggableMenuBar = ({
  className, app, maximize, windowRef,
}) => {
  const [openApps, setOpenApps] = useAtom(openAppList);
  const [, setActiveApp] = useAtom(currentApp);
  const handleClose = (e) => {
    e.stopPropagation();
    windowRef.current.resizableElement.current.style.transition = 'clip-path ease-in 0.3s , transform ease-in 0.3s',

    windowRef.current.resizableElement.current.style.clipPath = 'polygon(0 0, 100% 0, 78% 100%, 31% 100%)';
    windowRef.current.resizableElement.current.style.transform = windowRef.current.resizableElement.current.style.transform +'scale(1)'

    setTimeout(
      () => {
        windowRef.current.resizableElement.current.style.clipPath = 'polygon(31% 0, 79% 0, 78% 100%, 31% 100%)';
        windowRef.current.resizableElement.current.style.transform = windowRef.current.resizableElement.current.style.transform+'translateY(50vh) scale(0.7)';
      },
      300,
    );
    setTimeout(
      () => {
        windowRef.current.resizableElement.current.style.transform = windowRef.current.resizableElement.current.style.transform+'translateY(100vh) scale(0.2)'
      },
      602,
    );

    setTimeout(() => {
      setOpenApps({ ...openApps, [app]: { ...openApps[app], show: false } });
      setActiveApp(null);
    }, 800);
  };

  const handleMaximize = () => {
    maximize();
  };
  return (
    <DraggableMenuWrapper className={className}>
      <IconCollection>
        <Close onClick={(e) => handleClose(e)} />
        <Minimize />
        <Maximize onClick={() => handleMaximize()} />
      </IconCollection>
    </DraggableMenuWrapper>
  );
};

export default DraggableMenuBar;
