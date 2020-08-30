import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingPokeContainer: React.FC = () => {
  return (
    <Container>
      <Skeleton className="image-bg" />
      <Skeleton className="name" />
      <Skeleton className="buttons-container">
        <Skeleton />
      </Skeleton>
    </Container>
  );
};

export default LoadingPokeContainer;
