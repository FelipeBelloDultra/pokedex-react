import React from 'react';

import { Container } from './styles';

interface IProps {
  name: string;
  image: string;
}

const PokeCard: React.FC<IProps> = ({ image, name }) => {
  return (
    <Container>
      <img src={image} alt={name} />
      <p>{name}</p>
    </Container>
  );
};

export default PokeCard;
