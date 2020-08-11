import React, { useMemo } from 'react';
import { FiSearch, FiTrash } from 'react-icons/fi';

import { formatWord } from '../../utils/formatWord';

import { Container, ButtonsContainer } from './styles';

interface IProps {
  name: string;
  image: string;
  handleDeletePokemon: () => void;
}

const PokeCard: React.FC<IProps> = ({ image, name, handleDeletePokemon }) => {
  const pokeName = useMemo(() => {
    return formatWord(name);
  }, [name]);

  return (
    <Container>
      <img src={image} alt={name} />
      <p>{pokeName}</p>
      <ButtonsContainer>
        <button type="button" onClick={handleDeletePokemon}>
          <FiTrash size={25} color="#fff" />
        </button>
        <button
          type="button"
          onClick={() => console.log('Open Modal with poke info')}
        >
          <FiSearch size={25} color="#00b350" />
        </button>
      </ButtonsContainer>
    </Container>
  );
};

export default PokeCard;
