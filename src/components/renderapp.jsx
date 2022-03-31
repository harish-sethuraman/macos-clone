import React, { lazy, Suspense } from 'react';
import Frame from 'react-frame-component';
import InProgress from './inprogress';

// eslint-disable-next-line import/no-unresolved
const Portfolio = lazy(() => import('PORTFOLIO/Portfolio'));
// eslint-disable-next-line import/no-unresolved
const VSCode = lazy(() => import('VSCODE/VSCODE'));
// eslint-disable-next-line import/no-unresolved
const Insta = lazy(() => import('INSTA/Insta'));
// eslint-disable-next-line import/no-unresolved
const Iterm = lazy(() => import('ITERM/Iterm'));

const renderApp = (app) => {
  switch (app) {
    case 'app':
      return <h1>{app}</h1>;
    case 'finder':
      // eslint-disable-next-line no-case-declarations
      let devCss = `<!DOCTYPE html>
      <html>
      <head>
      <style>* {font-family: Rubik, sans-serif;}html {height: 100%;}body {height: 100%;width: 100%;margin: 0;padding: 0;}.shimmer {display: flex;flex-direction: column;height: 100vh;}.nav-shimmer {background-color: #151722;height: 81px;width: 100%;display: flex;align-items: center;justify-content: flex-end;}.text-shimmer {width: 100px;border-radius: 4px;background: white;height: 30px;margin-left: 20px;animation: shine infinite 1.5s;}.left-shimmers {display: flex;justify-content: space-between;margin-right: 80px;animation: shine infinite 1.5s;}.nav-icon-shimmer {display: none;height: 50px;width: 50px;background: white;border-radius: 5px;margin-left: 80px;animation: shine infinite 1.5s;}@media (min-width: 1200px){.left-shimmers{margin-right: 183px;}}@media screen and (max-width : 1200px ) and ( min-width: 1366px){.left-shimmers{margin-right: 432px;}}@media screen and (max-width: 992px) {.nav-icon-shimmer {display: flex;}.left-shimmers {display: none;}.nav-shimmer {justify-content: flex-start;}}.mode-shimmer {background-color: #fff;height: 25px;width: 25px;border-radius: 50%;margin-left: 20px;animation: shine infinite 1.5s;}.body-shimmer {height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;}.pic-shimmer {height: 150px;width: 150px;background-color: gray;border-radius: 50%;animation: shine infinite 1.5s;}.name-holder{display: flex;flex-wrap: wrap;align-items: center;justify-content: center;}.name-shimmer {font-size: 36px;}.name-shimmer:nth-child(1){margin-right: 5px;}.icons-shimmer {display: flex;}.icon-shimmer {height: 18px;width: 18px;background: gray;margin: 3px;border-radius: 50%;animation: shine infinite 1.5s;}.button-shimmer {background: #ff4c60;height: 40px;width: 140px;border-radius: 10px;color: white;font-size: 16px;font-weight: 700;outline: none;border: none;margin-top:24px;}.h2-shimmer{font-weight: 500;font-size: 28px;}@keyframes shine {0% {opacity: 0.8;}50% {opacity: 0.5;}100% {opacity: 0.8;}}</style>
      <link rel="stylesheet" type="text/css" href="http://localhost:8080/portfolio.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <style>
      html::-webkit-scrollbar{
        display:none;}</style>
      </head><body><div></div></body></html>`;

      // eslint-disable-next-line no-case-declarations
      let prodCss = `<!DOCTYPE html>
      <html>
      <head>
      <style>* {font-family: Rubik, sans-serif;}html {height: 100%;}body {height: 100%;width: 100%;margin: 0;padding: 0;}.shimmer {display: flex;flex-direction: column;height: 100vh;}.nav-shimmer {background-color: #151722;height: 81px;width: 100%;display: flex;align-items: center;justify-content: flex-end;}.text-shimmer {width: 100px;border-radius: 4px;background: white;height: 30px;margin-left: 20px;animation: shine infinite 1.5s;}.left-shimmers {display: flex;justify-content: space-between;margin-right: 80px;animation: shine infinite 1.5s;}.nav-icon-shimmer {display: none;height: 50px;width: 50px;background: white;border-radius: 5px;margin-left: 80px;animation: shine infinite 1.5s;}@media (min-width: 1200px){.left-shimmers{margin-right: 183px;}}@media screen and (max-width : 1200px ) and ( min-width: 1366px){.left-shimmers{margin-right: 432px;}}@media screen and (max-width: 992px) {.nav-icon-shimmer {display: flex;}.left-shimmers {display: none;}.nav-shimmer {justify-content: flex-start;}}.mode-shimmer {background-color: #fff;height: 25px;width: 25px;border-radius: 50%;margin-left: 20px;animation: shine infinite 1.5s;}.body-shimmer {height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;}.pic-shimmer {height: 150px;width: 150px;background-color: gray;border-radius: 50%;animation: shine infinite 1.5s;}.name-holder{display: flex;flex-wrap: wrap;align-items: center;justify-content: center;}.name-shimmer {font-size: 36px;}.name-shimmer:nth-child(1){margin-right: 5px;}.icons-shimmer {display: flex;}.icon-shimmer {height: 18px;width: 18px;background: gray;margin: 3px;border-radius: 50%;animation: shine infinite 1.5s;}.button-shimmer {background: #ff4c60;height: 40px;width: 140px;border-radius: 10px;color: white;font-size: 16px;font-weight: 700;outline: none;border: none;margin-top:24px;}.h2-shimmer{font-weight: 500;font-size: 28px;}@keyframes shine {0% {opacity: 0.8;}50% {opacity: 0.5;}100% {opacity: 0.8;}}</style>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="https://strek.netlify.app/portfolio.css">
      <style>
      html::-webkit-scrollbar{
        display:none;}</style>
      </head><body><div></div></body></html>`;
      return (
        <iframe
          title="portfolio"
          className="portfolio-frame"
          src="https://strek.in"
          style={{ height: '100%', width: '100%', border: 'none' }}
        />
      );
    case 'vscode':
      return (
        <Suspense
          fallback={(
            <div className="vscodeloader">
              <div className="content">
                <div className="leftnav">
                  <div className="navitem" />
                  <div className="navitem" />
                  <div className="navitem" />
                  <div className="navitem" />
                  <div className="navitem" />
                </div>
                <div className="codearea">
                  <div className="loading" />
                  <div className="text">Loading</div>
                </div>
              </div>
              <div className="bottombar">
                <div className="leftside">
                  <div className="icons" />
                  <div className="icons" />
                  <div className="icons" />
                  <div className="icons" />
                </div>
                <div className="rightside">
                  <div className="icons" />
                  <div className="icons" />
                  <div className="icons" />
                  <div className="icons" />
                  <div className="icons" />
                </div>
              </div>
            </div>
          )}
        >
          <VSCode />
        </Suspense>
      );
    case 'insta':
      // eslint-disable-next-line no-case-declarations
      devCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="http://localhost:8081/styles.css">
      <style>
      .frame-content{
        width : 100vw;
      }
      </style>
      </head><body><div></div></body></html>`;

      // eslint-disable-next-line no-case-declarations
      prodCss = `<!DOCTYPE html>
      <html>
      <head>
      <style>
      .frame-content{
        width : 100vw;
      }
      </style>
      <link rel="stylesheet" type="text/css" href="https://strek-insta.netlify.app/styles.css">
      </head><body><div></div></body></html>`;
      return (
        <Frame
          initialContent={process.env ? devCss : prodCss}
          style={{ height: '100%', width: '100%', border: 'none' }}
        >
          <Suspense
            fallback={(
              <center>
                <h1>Loading InstaClone</h1>
              </center>
            )}
          >
            <Insta insideBigSur />
          </Suspense>
        </Frame>
      );
    case 'iterm':
      return (
        <Suspense
          fallback={(
            <center>
              <h1>Loading Iterm</h1>
            </center>
          )}
        >
          <Iterm />
        </Suspense>
      );
    default:
      return <InProgress app={app} />;
  }
};
export default renderApp;
