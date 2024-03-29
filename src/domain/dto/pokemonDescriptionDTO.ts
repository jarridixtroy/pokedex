export interface PokemonDescriptionDTO {
  base_happiness: Number;
  capture_rate: Number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: [
    {
      name: string;
      url: string;
    }
  ];
  evolution_change: {
    url: string;
  };
  evolves_from_especies: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
}

export default PokemonDescriptionDTO;
