import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > header {
    margin-bottom: 20px;

    a {
      background: #cf3935;
      width: 80px;
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      margin-left: auto;
      transition: all 0.2s;

      &:hover {
        background: ${shade(0.2, '#cf3935')};
        width: 100px;
      }
    }
  }
`;
