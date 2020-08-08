import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrash } from 'react-icons/fi';

import { Container, ButtonsContainer } from './styles';

interface IProps {
  name: string;
  image: string;
  handleDeletePokemon: () => void;
}

const PokeCard: React.FC<IProps> = ({ image, name, handleDeletePokemon }) => {
  const pokeName = useMemo(() => {
    const newName = name[0].toUpperCase() + name.substring(1);

    return newName.replace('-', ' ');
  }, [name]);

  return (
    <>
      <Container>
        <img src={image} alt={name} />
        <p>{pokeName}</p>
        <ButtonsContainer>
          <button type="button" onClick={handleDeletePokemon}>
            <FiTrash size={25} color="#fff" />
          </button>
          <Link to={`/detail/${name}`}>
            <FiArrowRight size={25} color="#00b350" />
          </Link>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default PokeCard;
