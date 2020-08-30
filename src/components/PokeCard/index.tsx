import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrash } from 'react-icons/fi';

import { formatWord } from '../../utils/formatWord';

import { Container, ButtonsContainer } from './styles';
import LoadingPokeContainer from '../Shimmer/LoadingPokeContainer';

interface IProps {
  name: string;
  image: string;
  handleDeletePokemon: () => void;
  isLoading: boolean;
}

const PokeCard: React.FC<IProps> = ({
  image,
  name,
  handleDeletePokemon,
  isLoading,
}) => {
  const pokeName = useMemo(() => {
    return formatWord(name);
  }, [name]);

  return (
    <>
      {isLoading ? (
        <LoadingPokeContainer />
      ) : (
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
      )}
    </>
  );
};

export default PokeCard;
