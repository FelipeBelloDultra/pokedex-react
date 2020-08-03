import React, {
  useEffect,
  useState,
  useCallback,
  FormEvent,
  useRef,
} from 'react';

import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

import { Form, PokeContainer } from './styles';

interface IPokemon {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [inputError, setInputError] = useState<string>('');
  const [pokemons, setPokemons] = useState<IPokemon[]>(() => {
    const storagePokemons = localStorage.getItem('@PokeSearch:pokemons');

    if (storagePokemons) {
      return JSON.parse(storagePokemons);
    }

    return [];
  });

  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('@PokeSearch:pokemons', JSON.stringify(pokemons));
  }, [pokemons]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const pokeName = inputRef.current.value;

      if (!pokeName) {
        setInputError('Preencha o campo');
        return;
      }

      const formatedPoke = pokeName.toLowerCase().replace(' ', '-');

      try {
        const response = await api.get(`/pokemon/${formatedPoke}`);

        const pokemon = {
          id: response.data.id,
          name: response.data.name,
          image:
            response.data.sprites.other.dream_world.front_default ||
            response.data.sprites.front_default,
        };

        const findPokemon = pokemons.find(
          poke => poke.id === pokemon.id || poke.name === pokemon.name,
        );

        if (findPokemon) {
          setInputError('Pokemon já cadastrado');
          return;
        }

        setPokemons([pokemon, ...pokemons]);
        setInputError('');
        inputRef.current.value = '';
      } catch (error) {
        setInputError('Ocorreu um erro');
      }
    },
    [pokemons, setPokemons],
  );

  const handleDeletePokemon = useCallback(
    (id: number) => {
      const filtredPokemons = pokemons.filter(pokemon => pokemon.id !== id);

      setPokemons(filtredPokemons);
    },
    [pokemons],
  );

  return (
    <>
      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Digite o ID ou nome do Pokemon" />
        <button type="submit">
          Procurar <br /> Pokemon
        </button>
      </Form>

      <PokeContainer>
        {pokemons.map(pokemon => (
          <PokeCard
            key={pokemon.id}
            handleDeletePokemon={() => handleDeletePokemon(pokemon.id)}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </PokeContainer>
    </>
  );
};

export default Home;
