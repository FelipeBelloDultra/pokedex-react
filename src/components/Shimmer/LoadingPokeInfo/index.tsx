import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingPokeInfo: React.FC = () => {
  return (
    <Container>
      <div className="first-group">
        <Skeleton className="pokemon-info" />
        <Skeleton className="pokemon-image" />
      </div>
      <div className="second-group">
        <Skeleton className="pokemon-types" />
        <Skeleton className="pokemon-types" />
        <Skeleton className="pokemon-types" />
      </div>
    </Container>
  );
};

export default LoadingPokeInfo;
