import { atom } from 'jotai';
import { createGlobalStyle } from 'styled-components';
import CascadiaCode from './CascadiaCode.woff2';

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
  font-family:  -apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', 'Helvetica','Arial', sans-serif;
  margin: 0;
  padding: 0;
}
html{
overflow: hidden;
}
@font-face {
        font-family:"'Cascadia Code',Menlo, Monaco, 'Courier New', monospace";
        src: local("'Cascadia Code',Menlo, Monaco, 'Courier New', monospace"), local("'Cascadia Code',Menlo, Monaco, 'Courier New', monospace"),
        url(${CascadiaCode}) format('woff2'),
        url(${CascadiaCode}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

`;

export const openAppList = atom({
  ...(window.location === window.parent.location && {
    finder: {
      show: true,
      height: window.innerHeight - 75 - 25,
      width: window.innerWidth,
    },
  }),
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
export const currentApp = atom(window.location === window.parent.location ? 'finder' : null);

export const desktopMode = atom(false);

export const menuAtom = atom(false);
