import React from 'react';

import { Container } from './styles';

interface IStats {
  name: string;
  value: number;
}

interface IPokemonInfo {
  pokemonInfo: {
    id: number;
    name: string;
    image: string;
    types: string[];
    stats: IStats[];
  };
}

const PokeInfo: React.FC<IPokemonInfo> = ({ pokemonInfo }) => {
  return (
    <Container>
      <h1>{pokemonInfo.name}</h1>
      <img src={pokemonInfo.image} alt={pokemonInfo.name} />
      <h3>Status: </h3>
      {!!pokemonInfo.stats &&
        pokemonInfo.stats.map(stat => (
          <p key={stat.name}>
            {stat.name}: {stat.value}
          </p>
        ))}
      <h3>
        Tipo: {!!pokemonInfo.types && pokemonInfo.types.map(type => `${type} `)}
      </h3>
    </Container>
  );
};

export default PokeInfo;
