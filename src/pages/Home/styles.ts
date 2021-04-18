import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 23px 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #e74743;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e74743')};
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;

    button {
      padding: 0px 5px;
      border-radius: 5px;
      max-width: 150px;
      width: 100%;
      height: 50px;
      margin-top: 20px;
      margin-left: auto;
    }

    input {
      -webkit-user-select: text;
      user-select: text;
      border-radius: 5px;
      border-right: 2px solid #fff;

      ${props =>
        props.hasError &&
        css`
          border-color: #c53030;
        `}
    }
  }
`;

export const PokeContainer = styled.div`
  margin-top: 80px;
  max-width: 700px;
  padding-bottom: 80px;
`;

export const WithoutPokemonContainer = styled.div`
  width: 270px;
  margin-left: auto;

  span {
    color: #e74743;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 20px;
  }
`;
