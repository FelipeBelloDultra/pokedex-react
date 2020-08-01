import React from 'react';

import PokeCard from '../../components/PokeCard';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <PokeCard />
    </Container>
  );
};

export default Home;
