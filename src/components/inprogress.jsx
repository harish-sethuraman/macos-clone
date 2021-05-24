import React from 'react';
import styled from 'styled-components';
import { renderImage } from './renderimage';

const InProgressWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppImage = styled.img`
  height: 100px;
  width: 100px;
`;
const ProgressText = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #616161;
`;

const InProgress = ({ app }) => (
  <InProgressWrapper>
    <AppImage src={renderImage(app)} />
    <ProgressText>
      {app === 'git' ? 'My Github was opened!' : 'MicroFrontends brewing'}
    </ProgressText>
  </InProgressWrapper>
);

export default InProgress;
