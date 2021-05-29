import React from 'react';
import { useAtom } from 'jotai';
import { openAppList } from '../atoms/index.atom';
import DraggableAppWindow from './draggableappwindow';

const AppWindows = () => {
  const [openApps, setOpenApps] = useAtom(openAppList);

  return (
    <>
      {Object.keys(openApps).map(
        (app) => openApps[app].show && <DraggableAppWindow app={app} />,
      )}
    </>
  );
};

export default AppWindows;
