import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import PokeInfo from '../../components/PokeInfo';

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

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={25} color="#fff" />
        </Link>
      </header>
      <PokeInfo pokemonInfo={pokemonInfo} />
    </Container>
  );
};

export default Detail;
