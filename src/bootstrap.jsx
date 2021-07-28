import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themes, GlobalStyle } from './atoms/index.atom';
import PageLoader from './components/loading';

import Desktop from './components/desktop';

const Index = () => {
  const [chime, setChime] = useState(false);
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      {/* {!chime && <PageLoader setChime={setChime} />} */}
      <Desktop />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
