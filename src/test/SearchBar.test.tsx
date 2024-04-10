import "../componentes/SearchBar.tsx";
import { SearchBar } from "../components/SearchBar.tsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
describe("Cuando el usuario escribe un input en la barra de busqueda", () => {
  it("se llama a onsearch con el input", () => {
    const mockOnSearch = jest.fn();

    render(<SearchBar onSearch={mockOnSearch} />);
    const input = screen.getByAltText("searchbar");
    userEvent.type(input, "Pikachu");

    expect(mockOnSearch).toHaveBeenCalledWith("Pikachu");
  });
});
