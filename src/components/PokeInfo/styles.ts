import styled, { css } from 'styled-components';

interface ITypeProps {
  type: string;
}

export const Container = styled.div`
  max-width: 750px;
  margin-left: auto;
  width: 100%;
  background: #fff;
  border-radius: 5px 5px 0 0;

  display: flex;
  flex-wrap: wrap;
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
  width: 400px;
  min-width: 300px;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 700px;
  }

  @media (max-width: 340px) {
    min-width: 0px;
  }

  > div {
    display: flex;
    padding: 0 5px 2px;
    border: 8px;
    justify-content: space-between;
    transition: all 0.2s;

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
  padding: 10px;

  > img {
    height: 250px;
    width: 250px;
    object-fit: contain;
    margin: 0 auto;
    position: relative;
    top: 40px;
  }

  @media (max-width: 610px) {
    width: 100%;

    > img {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    margin-bottom: -35px;
  }
`;

export const TypesContainer = styled.div`
  max-width: 750px;
  width: 100%;
  padding: 20px 10px;
  margin-left: auto;
  background: #fff;
  border-radius: 0 0 5px 5px;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const LabelType = styled.span<ITypeProps>`
  margin: 5px 10px;
  border-radius: 8px;
  padding: 3px 7px;
  letter-spacing: 1px;
  font-weight: bold;

  ${props =>
    props.type === 'flying' &&
    css`
      border: 2px solid #9caaf1;
      color: #9caaf1;
    `}

  ${props =>
    props.type === 'bug' &&
    css`
      border: 2px solid #a9b821;
      color: #a9b821;
    `}

  ${props =>
    props.type === 'poison' &&
    css`
      border: 2px solid #954d96;
      color: #954d96;
    `}

  ${props =>
    props.type === 'electric' &&
    css`
      border: 2px solid #f7bb3b;
      color: #f7bb3b;
    `}

  ${props =>
    props.type === 'water' &&
    css`
      border: 2px solid #3186d9;
      color: #3186d9;
    `}

  ${props =>
    props.type === 'normal' &&
    css`
      border: 2px solid #cac9c3;
      color: #cac9c3;
    `}

  ${props =>
    props.type === 'fighting' &&
    css`
      border: 2px solid #843923;
      color: #843923;
    `}

  ${props =>
    props.type === 'ground' &&
    css`
      border: 2px solid #d1b156;
      color: #d1b156;
    `}

  ${props =>
    props.type === 'rock' &&
    css`
      border: 2px solid #cebe90;
      color: #cebe90;
    `}

  ${props =>
    props.type === 'ghost' &&
    css`
      border: 2px solid #999bcc;
      color: #999bcc;
    `}

  ${props =>
    props.type === 'dark' &&
    css`
      border: 2px solid #3f3025;
      color: #3f3025;
    `}

  ${props =>
    props.type === 'dragon' &&
    css`
      border: 2px solid #7f6fdb;
      color: #7f6fdb;
    `}

  ${props =>
    props.type === 'fairy' &&
    css`
      border: 2px solid #f3b2f5;
      color: #f3b2f5;
    `}

  ${props =>
    props.type === 'fire' &&
    css`
      border: 2px solid #ed483c;
      color: #ed483c;
    `}

  ${props =>
    props.type === 'grass' &&
    css`
      border: 2px solid #92c964;
      color: #92c964;
    `}

  ${props =>
    props.type === 'ice' &&
    css`
      border: 2px solid #6bd2f4;
      color: #6bd2f4;
    `}

  ${props =>
    props.type === 'psychic' &&
    css`
      border: 2px solid #e35484;
      color: #e35484;
    `}

  ${props =>
    props.type === 'steel' &&
    css`
      border: 2px solid #b1b2bc;
      color: #b1b2bc;
    `}
`;
