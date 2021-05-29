import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import DraggableMenuBar from './draggablemenubar';
import renderApp from './renderapp';
import { currentApp } from '../atoms/index.atom';

const AppWindowWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

const MFEHolder = styled.div`
  ${(props) => (props.app === 'vscode'
    ? 'height : calc(100% - 50px);'
    : 'height : calc(100% - 25px);')}
`;

const DraggableAppWindow = ({ app }) => {
  function extractPositionFromTransformStyle(transformStyle) {
    const matched = transformStyle.matchAll(/[0-9.]+/g);
    try {
      return { x: matched.next().value[0], y: matched.next().value[0] };
    } catch {
      return { x: 0, y: 0 };
    }
  }
  let originalPositionRef = {
    x: 0,
    y: 0,
  };
  const useMaximizeWindow = (windowRef) => {
    let originalSizeRef = { height: 0, width: 0 };

    let transitionClearanceRef;
    const dockElementHeight = 75;
    const topBarElementHeight = 23;
    const desktopHeight = document.body.clientHeight - dockElementHeight - topBarElementHeight;
    const deskTopWidth = document.body.clientWidth;

    // eslint-disable-next-line max-len
    const { clientWidth: windowWidth, clientHeight: windowHeight } = windowRef.current.resizableElement.current;

    const { x: windowLeft, y: windowTop } = extractPositionFromTransformStyle(
      windowRef.current.resizableElement.current.style.transform,
    );
    windowRef.current.resizableElement.current.style.transition = 'height 0.3s ease, width 0.3s ease, transform 0.3s ease';

    clearTimeout(transitionClearanceRef);

    transitionClearanceRef = setTimeout(() => {
      if (windowRef.current.resizableElement.current) {
        windowRef.current.resizableElement.current.style.transition = '';
      }
      transitionClearanceRef = 0;
    }, 300);

    if (windowWidth === deskTopWidth && windowHeight === desktopHeight) {
      windowRef.current.updateSize(originalSizeRef);
      windowRef.current.updatePosition(originalPositionRef);
    } else {
      originalSizeRef = { width: windowWidth, height: windowHeight };
      originalPositionRef = { x: Number(windowLeft), y: Number(windowTop) };

      windowRef.current.updateSize({
        height: desktopHeight,
        width: deskTopWidth,
      });

      windowRef.current.updatePosition({
        x: 0,
        y: 23,
      });
    }
  };
  const [activeApp, setActiveApp] = useAtom(currentApp);
  const windowRef = useRef();

  const setActive = (app) => {
    setActiveApp(app);
  };
  const maximize = () => {
    useMaximizeWindow(windowRef);
  };
  return (
    <Rnd
      ref={windowRef}
      key={app}
      default={{
        width: 300,
        height: 400,
        x: 0,
        y: 0,
      }}
      minWidth="500px"
      minHeight="400px"
      style={{
        boxShadow: '0 33px 81px rgb(0 0 0 / 31%)',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'white',
        overflowX: 'hidden',
        zIndex: `${activeApp === app ? '9' : '0'}`,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      }}
      bounds="parent"
      dragHandleClassName="draggable-tool-bar"
      onClick={() => setActive(app)}
    >
      <AppWindowWrapper app={app}>
        <DraggableMenuBar
          app={app}
          className="draggable-tool-bar"
          maximize={maximize}
          windowRef={windowRef}
        />
        <MFEHolder app={app}>{renderApp(app)}</MFEHolder>
      </AppWindowWrapper>
    </Rnd>
  );
};

export default DraggableAppWindow;
