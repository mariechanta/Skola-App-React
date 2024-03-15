import React from 'react';
import { css } from '@emotion/react';

const buttonStyles = css`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ children, onClick }) => {
  return <button css={buttonStyles} onClick={onClick}>{children}</button>;
};

export default Button;
