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
.vscodeloader {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: rgba(30, 30, 30, 100%);
      }
      .content {
        display: flex;
        width: 100%;
        height: calc(100vh - 25px);
      }
      .bottombar {
        height: 25px;
        display: flex;
        justify-content: space-between;
        background: rgba(46, 132, 213, 100%);
      }
      .leftnav {
        width: 50px;
        align-content: center;
        height: 100%;
        background: rgba(58, 58, 58, 100%);
        display: flex;
        flex-direction: column;
      }
      .navitem {
        margin: 10px 9px;
        background: rgba(124, 124, 124);
        height: 32px;
        width: 32px;
        border-radius: 5px;
        animation: shine infinite ease 1.5s;
      }
      @keyframes shine {
        0% {
          opacity: 0.8;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0.8;
        }
      }
      .codearea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .codearea .text {
        color: white;
        font-family: sans-serif;
        margin-top: 10px;
      }
      .loading {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid rgba(124, 124, 124, 80%);
        border-top-color: rgba(0, 0, 0, 0.3);
        animation: loading 1.2s linear infinite;
      }
      .icons{
        height : 18px;
        width: 18px;
        border-radius: 2px;
        margin: 3.5px;
        background: white;
        animation: shine infinite ease 1.5s;
      }
      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes loading {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      .leftside,.rightside{
        display: flex;
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
      height: window.innerHeight - 75 - 25 - 10,
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
export const currentApp = atom(
  window.location === window.parent.location ? 'finder' : null,
);

export const desktopMode = atom(false);

export const menuAtom = atom(false);
