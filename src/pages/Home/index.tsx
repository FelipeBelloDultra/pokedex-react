import React, {
  useEffect,
  useState,
  useCallback,
  FormEvent,
  useRef,
} from 'react';

import { useToast } from '../../hooks/toast';

import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

import { Form, PokeContainer } from './styles';

interface IPokemon {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [inputError, setInputError] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>(() => {
    const storagePokemons = localStorage.getItem('@PokeSearch:pokemons');

    if (storagePokemons) {
      return JSON.parse(storagePokemons);
    }

    return [];
  });

  const { addToast } = useToast();

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
        setInputError(true);
        addToast({
          description: `enter the Name or ID of the pokemon.`,
          title: 'Alert!',
          type: 'info',
        });
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
          setInputError(true);
          addToast({
            description: `pokemon ${pokemon.name} has already been registered.`,
            title: 'Alert!',
            type: 'info',
          });
          return;
        }

        setPokemons([pokemon, ...pokemons]);
        setInputError(false);
        inputRef.current.value = '';
        addToast({
          description: `${pokemon.name} added to your list.`,
          title: 'Success!',
          type: 'success',
        });
      } catch (error) {
        addToast({
          description: `opss... no pokemon found.`,
          title: 'Error...',
          type: 'error',
        });
        setInputError(true);
      }
    },
    [pokemons, addToast, setPokemons],
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
      <Form hasError={inputError} onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Search Pokemon by Name or ID" />
        <button type="submit">
          Search <br /> Pokemon
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
