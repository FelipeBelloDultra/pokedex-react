import React from 'react';

import { formatWord } from '../../utils/formatWord';

import {
  Container,
  ContainerStats,
  PokemonInfo,
  PokemonImg,
  TypesContainer,
  LabelType,
} from './styles';

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
    <>
      <Container>
        <ContainerStats>
          <header>
            <h3>
              {pokemonInfo.name}, {pokemonInfo.id}
            </h3>
          </header>
          <PokemonInfo>
            {!!pokemonInfo.stats &&
              pokemonInfo.stats.map(stat => (
                <div key={stat.name}>
                  <p>{formatWord(stat.name)}</p>
                  <p>{stat.value}</p>
                </div>
              ))}
          </PokemonInfo>
        </ContainerStats>
        <PokemonImg>
          <img src={pokemonInfo.image} alt={pokemonInfo.name} />
        </PokemonImg>
      </Container>
      <TypesContainer>
        {pokemonInfo.types &&
          pokemonInfo.types.map(type => (
            <LabelType key={type} type={type}>
              {type}
            </LabelType>
          ))}
      </TypesContainer>
    </>
  );
};

export default PokeInfo;
