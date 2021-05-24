import React, { useRef } from 'react';
import styled from 'styled-components';
import useRaf from '@rooks/use-raf';
import {
  motion, useMotionValue, useSpring, useTransform,
} from 'framer-motion';
import { useAtom } from 'jotai';
import { currentApp, openAppList } from '../atoms/index.atom';
import { renderImage } from './renderimage'

const baseWidth = 57.6;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.618,
  baseWidth * 2.218,
  baseWidth * 1.618,
  baseWidth * 1.1,
  baseWidth,
];

const useDockHoverAnimation = (mouseX, ref) => {
  const distance = useMotionValue(beyondTheDistanceLimit);
  const widthPX = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82,
    },
  );

  const width = useTransform(widthPX, (w) => `${w / 16}rem`);

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return { width };
};

const IconContent = styled.p`
white-space: nowrap;
background-color: hsla( 240, 24%, 100%, 0.5);
backdrop-filter: blur(5px);
padding: 0.5rem 0.75rem;
border-radius: 0.375rem;
box-shadow: hsla(0deg, 0%, 0%, 30%) 0px 1px 5px 2px, 0 0 0 0 white);
color:  hsl(0, 0%, 11%);
font-family:  -apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', 'Helvetica','Arial', sans-serif;
justify-content:center;
display: none;
width : fit-content;
position: relative;
`;

const DockItemWrapper = styled.div`
  align-items: center;
  height: 100%;
  width: auto !important;
  transition: all 200ms ease-in;
  transform-origin: bottom;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  &:hover ${IconContent} {
    display: flex;
  }
`;

const OpenIndicator = styled.div`
  height: 4px;
  width: 4px;
  margin: 0;
  border-radius: 50%;
  background-color: hsl(240, 3%, 11%);
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
`;

const DockItem = ({ item, mouseX }) => {
  const [activeApp, setActiveApp] = useAtom(currentApp);
  const [apps, setOpenApps] = useAtom(openAppList);
  const imgRef = useRef();

  const { width } = useDockHoverAnimation(mouseX, imgRef);

  const openApp = (app) => {
    if (app === 'git') {
      window.open('https://github.com/harish-sethuraman');
    }
    setActiveApp(app);
    setOpenApps({ ...apps, [app]: { ...apps[app], show: true } });
  };

  return (
    <DockItemWrapper
      onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
      onMouseLeave={() => mouseX.set(null)}
      onClick={() => openApp(item)}
    >
      <IconContent>{item}</IconContent>
      <motion.img
        ref={imgRef}
        style={{
          width,
          willChange: 'width',
          filter: 'drop-shadow(0px 0px 5px rgb(0,0,0,0.5))',
        }}
        alt={item}
        src={renderImage(item)}
      />
      <OpenIndicator isOpen={apps[item].show} />
    </DockItemWrapper>
  );
};

export default DockItem;
