import { rest } from 'msw';

const BASE_URL = "https://pokeapi.co/api/v2";

export const handlers = [
  rest.get(`${BASE_URL}/pokemon`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const limit = query.get('limit');
    const offset = query.get('offset');

    return res(
      ctx.json({
        results: Array.from({ length: Number(limit) }, (_, index) => ({
          name: `pokemon`,
          url: `${BASE_URL}/pokemon/${index + Number(offset)}`,
        })),
      }),
    );
  }),
  rest.get(`${BASE_URL}/pokemon/:pokemonId`, (req, res, ctx) => {
    const { pokemonId } = req.params;

    // Detalles de "pikachu"
    if (pokemonId === '25') {
      return res(ctx.json({
        id: 25,
        name: "pikachu",
        types: [{ type: { name: "electric" } }],
        height: 40,
        weight: 60,
        sprites: {
          other: {
            "official-artwork": {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            },
          },
        },
      }));
    }
  }),

  rest.get(`${BASE_URL}/pokemon-species/:pokemonId`, (req, res, ctx) => {
    const { pokemonId } = req.params;

    // Descripcion para "pikachu"
    if (pokemonId === '25') {
      return res(ctx.json({
        flavor_text_entries: [
          {
            flavor_text: "Pikachu, el Pokémon ratón eléctrico.",
            language: { name: "es" },
          },
        ],
      }));
    }
  }),
 
];