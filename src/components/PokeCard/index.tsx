import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrash } from 'react-icons/fi';

import { Container, ButtonsContainer } from './styles';

interface IProps {
  name: string;
  image: string;
  deletePokemon: () => void;
}

const PokeCard: React.FC<IProps> = ({ image, name, deletePokemon }) => {
  return (
    <>
      <Container>
        <img src={image} alt={name} />
        <p>{name.toUpperCase()}</p>
        <ButtonsContainer>
          <button type="button" onClick={deletePokemon}>
            <FiTrash size={25} color="#fff" />
          </button>
          <Link to="/">
            <FiArrowRight size={25} color="#00b350" />
          </Link>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default PokeCard;
