import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themes, GlobalStyle } from './atoms/index.atom';

import Desktop from './components/desktop';

const Index = () => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyle />
    <Desktop />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
