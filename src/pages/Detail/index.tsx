import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

interface IPokemonParams {
  pokemonName: string;
}

interface IStats {
  name: string;
  value: number;
}

interface IPokemonInfo {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: IStats[];
}

const Detail: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo>(
    {} as IPokemonInfo,
  );

  const { params } = useRouteMatch<IPokemonParams>();

  useEffect(() => {
    api.get(`/pokemon/${params.pokemonName}`).then(response => {
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        image:
          response.data.sprites.other.dream_world.front_default ||
          response.data.sprites.front_default,
        stats: response.data.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
        types: response.data.types.map((type: any) => type.type.name),
      };

      setPokemonInfo(pokemon);
    });
  }, [params.pokemonName]);

  console.log(pokemonInfo);

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

export default Detail;
