import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  transition: transform 0.2s;
  margin-bottom: 20px;

  &:hover {
    transform: translateX(15px);
  }

  > img {
    height: 120px;
    width: 120px;

    margin-right: 25px;
  }

  > p {
    margin-right: auto;
    font-size: 16px;
    font-weight: 700;
    color: #3a3a3a;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    padding: 10px;
    border: 0;
    background: #e74743;
    margin-bottom: 10px;
    border-radius: 0px 0px 0px 5px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e74743')};
    }
  }

  > a {
    border: 1;
    padding: 10px;
    margin-top: 20px;
  }
`;
