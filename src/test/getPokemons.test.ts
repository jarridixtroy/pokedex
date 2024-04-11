import "@testing-library/jest-dom/extend-expect"; // Importar para tener acceso a los matchers de Jest
import { server } from "./mocks/server";
import { getPokemons } from "../domain/services/getPokemons";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getPokemons", () => {
  it("Devuelve una lista de pokemon segun cuantos se quieren y accediendo a sus URLs", async () => {
    const pokemons = await getPokemons(1);
    expect(pokemons).toHaveLength(1);
    const pikachu = pokemons[0];
    expect(pikachu.name).toBe("pikachu");
    expect(pikachu.id).toBe(25);
    expect(pikachu.types).toBe(["electric"]);
    expect(pikachu.height).toBe(40);
    expect(pikachu.weight).toBe(60);
    expect(pikachu.sprite).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    );
  });
});
