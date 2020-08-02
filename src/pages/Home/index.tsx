import React, {
  useEffect,
  useState,
  useCallback,
  FormEvent,
  useRef,
} from 'react';

import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

import { Form } from './styles';

interface IStats {
  name: string;
  value: number;
}

interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: IStats[];
}

const Home: React.FC = () => {
  const [inputError, setInputError] = useState<string>('');
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const pokeName = inputRef.current.value;

      if (!pokeName) {
        setInputError('Preencha o campo');
        return;
      }

      try {
        const response = await api.get(`/pokemon/${pokeName}`);

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

        const findPokemon = pokemons.find(poke => poke.id === pokemon.id);

        if (findPokemon) {
          setInputError('Pokemon já cadastrado');
          return;
        }

        setPokemons([...pokemons, pokemon]);
      } catch (error) {
        console.log(error);
      }
    },
    [pokemons, setPokemons],
  );

  return (
    <>
      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Digite o ID ou Nome do Pokemon" />
        <button type="submit">
          Procurar <br /> Pokemon
        </button>
      </Form>
      <PokeCard />
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
