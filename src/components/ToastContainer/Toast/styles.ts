import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypesVariations = {
  info: css`
    background: #3172b7;
    color: #fff;
  `,
  success: css`
    background: #68ae28;
    color: #fff;
  `,
  error: css`
    background: #e74743;
    color: #fff;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 360px;
  width: 100%;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  opacity: 0.8;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypesVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
