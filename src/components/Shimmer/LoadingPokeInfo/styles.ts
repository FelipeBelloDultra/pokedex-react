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

    @media (max-width: 700px) {
      flex-direction: column;
    }

    .pokemon-info {
      max-width: 440px;
      width: 100%;
      height: 270px;
      border-radius: 5px;
      margin-right: 10px;

      @media (max-width: 700px) {
        max-width: 100%;
        margin-right: 0;
      }
    }

    .pokemon-image {
      width: 250px;
      height: 250px;
      margin: 10px auto;
      border-radius: 5px;

      @media (max-width: 700px) {
        max-width: 200px;
        max-height: 200px;
      }
    }
  }

  .second-group {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;

    .pokemon-types {
      width: 70px;
      height: 30px;
      margin: 12px 5px;
      border-radius: 5px;
    }
  }
`;
