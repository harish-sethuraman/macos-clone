import React, { useRef } from "react";
import styled from "styled-components";
import useRaf from "@rooks/use-raf";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useAtom } from "jotai";
import { currentApp, openAppList } from "../atoms/index.atom";

import VSCode from "../images/vscode.png";
import Mail from "../images/mail.png";
import Safari from "../images/safari.png";
import Terminal from "../images/iTerm.png";
import Finder from "../images/finder.png";
import Git from "../images/git.png";
import Music from "../images/music.png";
import Notes from "../images/notes.png";
import Postman from "../images/postman.png";

const renderImage = (item) => {
  switch (item) {
    case "finder":
      return Finder;
    case "git":
      return Git;
    case "iterm":
      return Terminal;
    case "mail":
      return Mail;
    case "music":
      return Music;
    case "notes":
      return Notes;
    case "postman":
      return Postman;
    case "safari":
      return Safari;
    case "vscode":
      return VSCode;
    default:
      return null;
  }
};

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
  baseWidth * 2.618,
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
    }
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

const DockItem = ({ item, mouseX }) => {
  const [, setActiveApp] = useAtom(currentApp);
  const [apps, setOpenApps] = useAtom(openAppList);
  const imgRef = useRef();

  const { width } = useDockHoverAnimation(mouseX, imgRef);

  const openApp = (app) => {
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
        style={{ width, willChange: "width" }}
        alt={item}
        src={renderImage(item)}
      />
    </DockItemWrapper>
  );
};

export default DockItem;
