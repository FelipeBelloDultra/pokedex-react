import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 5px;
  max-width: 750px;
  margin-left: auto;
  width: 100%;
  background: #fff;
  border-radius: 5px;

  .first-group {
    display: flex;
    justify-content: space-between;

    .pokemon-info {
      max-width: 440px;
      width: 100%;
      height: 270px;
      border-radius: 5px;
    }

    .pokemon-image {
      width: 250px;
      height: 250px;
      margin: 10px;
      border-radius: 5px;
    }
  }

  .second-group {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .pokemon-types {
      width: 70px;
      height: 30px;
      margin: 7px 10px 5px;
      border-radius: 5px;
    }
  }
`;
