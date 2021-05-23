import React, { lazy, Suspense } from 'react';
import Frame from 'react-frame-component';

// eslint-disable-next-line import/no-unresolved
const Portfolio = lazy(() => import('PORTFOLIO/Portfolio'));
// eslint-disable-next-line import/no-unresolved
const VSCode = lazy(() => import('VSCODE/VSCODE'));

const renderApp = (app) => {
  switch (app) {
    case 'app':
      return <h1>{app}</h1>;
    case 'finder':
      // eslint-disable-next-line no-case-declarations
      const devCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="http://localhost:8080/portfolio.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      </head><body><div></div></body></html>`;

      // eslint-disable-next-line no-case-declarations
      const prodCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="https://strek.netlify.app/portfolio.css">
      </head><body><div></div></body></html>`;
      return (
        <Frame
          initialContent={process.env ? devCss : prodCss}
          style={{ height: '100%', width: '100%' }}
        >
          <Suspense fallback={<h1>Couldnt load port</h1>}>
            <Portfolio insideBigSur />
          </Suspense>
        </Frame>
      );
    case 'vscode':
      return (
        <Suspense fallback={<h1>Couldnt load vscode</h1>}>
          <VSCode />
        </Suspense>
      );
    default:
      return <h1>{app}</h1>;
  }
};
export default renderApp;
