import React, { lazy, Suspense } from 'react';
import Frame from 'react-frame-component';
import InProgress from './inprogress';

// eslint-disable-next-line import/no-unresolved
// const Portfolio = lazy(() => import('PORTFOLIO/Portfolio'));
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
