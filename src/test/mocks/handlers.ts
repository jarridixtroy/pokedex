import { http, HttpResponse } from "msw";

const BASE_URL = "https://pokeapi.co/api/v2";

export const handlers = [
  http.get(`${BASE_URL}/pokemon`, ({ request }) => {
    const query = new URL(request.url);
    const limit = query.searchParams.get("limit");
    const offset = query.searchParams.get("offset");

    return HttpResponse.json({
      results: Array.from({ length: Number(limit) }, (_, index) => ({
        name: `pokemon`,
        url: `${BASE_URL}/pokemon/${index + Number(offset)}`,
      })),
    });
  }),

  http.get(`${BASE_URL}/pokemon/:pokemonId`, ({ request }) => {
    const query = new URL(request.url);
    const pokemonId = query.searchParams.get("pokemonId");

    // Detalles de "pikachu"
    if (pokemonId === "25") {
      return HttpResponse.json({
        id: 25,
        name: "pikachu",
        types: [{ type: { name: "electric" } }],
        height: 40,
        weight: 60,
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            },
          },
        },
      });
    }
  }),

  http.get(`${BASE_URL}/pokemon-species/:pokemonId`, ({ request }) => {
    const query = new URL(request.url);
    const pokemonId = query.searchParams.get("pokemonId");

    // Descripcion para "pikachu"
    if (pokemonId === "25") {
      return HttpResponse.json({
        flavor_text_entries: [
          {
            flavor_text: "Pikachu, el Pokémon ratón eléctrico.",
            language: { name: "es" },
          },
        ],
      });
    }
  }),
];
