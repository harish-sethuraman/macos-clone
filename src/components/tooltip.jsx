import React from "react";
import styled from "styled-components";

const ToolTipWrapper = styled.div`
  --double-border: 0 0 0 0 white;
  white-space: nowrap;
  position: absolute;
  top: -25%;
  background-color: hsla(var(--app-color-light-hsl), 0.5);
  backdrop-filter: blur(5px);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  box-shadow: hsla(0deg, 0%, 0%, 30%) 0px 1px 5px 2px, var(--double-border);
  color: var(--app-color-light-contrast);
  font-family: var(--app-font-family);
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  display: none;
`;

const ToolTip = ({ children }) => <ToolTipWrapper>{children}</ToolTipWrapper>;

export default ToolTip;
