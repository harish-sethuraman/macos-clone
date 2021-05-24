import { atom } from 'jotai';

import { createGlobalStyle } from 'styled-components';

export const themes = {
  dark: {
    background: '#000',
  },
  light: {
    background: '#fff',
    title: '#ff6347',
    text: '#000',
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  font-family : Source Sans Pro,sans-serif;
  margin: 0;
  padding: 0;
}
`;

export const openAppList = atom({
  finder: {
    show: false,
    height: 300,
    width: 400,
  },
  git: {
    show: false,
    height: 300,
    width: 400,
  },
  iterm: {
    show: false,
    height: 300,
    width: 400,
  },
  insta: {
    show: false,
    height: 300,
    width: 400,
  },
  // mail: {
  //   show: false,
  //   height: 300,
  //   width: 400,
  // },
  // music: {
  //   show: false,
  //   height: 300,
  //   width: 400,
  // },
  notes: {
    show: false,
    height: 300,
    width: 400,
  },
  postman: {
    show: false,
    height: 300,
    width: 400,
  },
  safari: {
    show: false,
    height: 300,
    width: 400,
  },
  vscode: {
    show: false,
    height: 300,
    width: 400,
  },
 
});
export const currentApp = atom(null);

export const desktopMode = atom(false);
