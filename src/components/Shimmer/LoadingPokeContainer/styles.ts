import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  transition: transform 0.2s;
  margin-bottom: 20px;

  .image-bg {
    height: 120px;
    width: 120px;
    margin-right: 25px;
    border-radius: 5px;
  }

  .name {
    border-radius: 5px;
    margin-right: auto;
    height: 25px;
    width: 100px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    justify-content: space-between;
    margin-right: 8px;

    > div {
      padding: 20px;
      height: 105px;
      border-radius: 5px;
    }
  }
`;
