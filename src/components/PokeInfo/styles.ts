import styled from 'styled-components';

export const Container = styled.div`
  max-width: 750px;
  margin-left: auto;
  width: 100%;
  background: #fff;
  border-radius: 5px;

  display: flex;
`;

export const ContainerStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;

  header {
    border-radius: 5px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    background: #fff;
    font-size: 700;
  }
`;

export const PokemonInfo = styled.main`
  padding: 10px;
  width: 100%;
  max-width: 400px;

  > div {
    display: flex;
    justify-content: space-between;

    > p {
      margin-top: 10px;
      font-size: 20px;
    }

    > p + p {
      margin-right: 10px;
    }
  }
`;

export const PokemonImg = styled.aside`
  height: 260px;
  width: 260px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 250px;
    width: 250px;
  }
`;
