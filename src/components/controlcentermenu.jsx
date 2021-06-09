import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import {
  AirdropIcon,
  BluetoothIcon,
  KeyboardIcon,
  MoonIcon,
  WifiIcon,
} from '../icons/icons';
import { desktopMode } from '../atoms/index.atom';

const ControlCenterWrapper = styled.div`
  margin-top: 4.5px;
  right: 30px;
  width: auto;
  background: hsla(240, 24%, 100%, 0.6);
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 11px 0,
    inset 0 0 0 0 hsla(240, 3%, 11%, 0.3), 0 0 0 0 hsla(240, 24%, 100%, 0.3);
`;

const IconButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${(props) => (props.dark ? 'hsla( 240,3%,11%,0.1)' : 'hsla(211, 100%, 50%)')};
  border: 0;
  fill: ${(props) => (props.dark ? '#000' : 'white')};
  transition : 0.3s background ease , 0.3s color ease;
`;

const BackgroundWrapper = styled.div`
  background: hsla(240, 24%, 100%, 0.7);
  margin: 8px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px -1px,
    inset 0 0 0 0 hsla(240, 3%, 11%, 0.3), 0 0 0 0 hsla(240, 24%, 100%, 0.3);
`;

const ButtonWrapper = styled.div`
  width: 120px;
  padding: 8px;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
`;

const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Text = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const ControlCenter = () => {
  const [darkMode, toggleDarkMode] = useAtom(desktopMode);
  return (
    <ControlCenterWrapper>
      <Wrapper>
        <BackgroundWrapper>
          <ButtonWrapper>
            <IconButton>
              <WifiIcon />
            </IconButton>
            <Text>Wi-Fi</Text>
          </ButtonWrapper>
          <ButtonWrapper>
            <IconButton>
              <BluetoothIcon />
            </IconButton>
            <Text>Bluetooth</Text>
          </ButtonWrapper>
          <ButtonWrapper>
            <IconButton>
              <AirdropIcon />
            </IconButton>
            <Text>Airdrop</Text>
          </ButtonWrapper>
        </BackgroundWrapper>
        <RightMenu>
          <BackgroundWrapper>
            <ButtonWrapper>
              <IconButton
                dark={darkMode}
                onClick={(e) => {
                  toggleDarkMode(!darkMode);
                  e.stopPropagation();
                }}
              >
                <MoonIcon />
              </IconButton>
              <Text>Dark mode</Text>
            </ButtonWrapper>
          </BackgroundWrapper>
          <BackgroundWrapper>
            <ButtonWrapper>
              <IconButton>
                <KeyboardIcon />
              </IconButton>
              <Text>Keyboard</Text>
            </ButtonWrapper>
          </BackgroundWrapper>
        </RightMenu>
      </Wrapper>
    </ControlCenterWrapper>
  );
};

export default ControlCenter;
