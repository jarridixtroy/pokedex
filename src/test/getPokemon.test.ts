import { server } from './mocks/server';
import { getPokemon } from '../domain/services/getPokemonDetails';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('getPokemon', () => {
  it('devuelve un pokemon con su descripcion especifica', async () => {
    const pokemon = await getPokemon('https://pokeapi.co/api/v2/pokemon/25');

    expect(pokemon).toEqual(expect.objectContaining({
      id: 25,
      name: 'pikachu',
      types: ['electric'],
      height: 4,
      weight: 60,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      description: 'Pikachu, el Pokémon ratón eléctrico.',
    }));
  });
});