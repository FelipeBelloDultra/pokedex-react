import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

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
      transition: width 0.2s;

      &:hover {
        width: 100px;
      }
    }
  }
`;
