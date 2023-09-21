const axios = require("axios");
const { Pokemon, Type } = require("../db");
//const fetchAllPokemons = require("./fetchAllPokemons");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon?limit=649";

const pokeData = (poke) => {
  return {
    id: poke.data.id,
    name:
      poke.data.name.charAt(0).toUpperCase() +
      poke.data.name.slice(1).toLowerCase(),
    image: poke.data.sprites.other.home.front_default,
    image2: poke.data.sprites.other.dream_world.front_default,
    hp: poke.data.stats[0].base_stat,
    attack: poke.data.stats[1].base_stat,
    defense: poke.data.stats[2].base_stat,
    speed: poke.data.stats[5].base_stat,
    height: poke.data.height,
    weight: poke.data.weiht,
    types: poke.data.types.map((types) => {
      const name = types.type.name;
      return { name };
    }),
  };
};

const getPokemons = async (req, res) => {
  try {
    const limit = 50; // Obtener 50 Pokémon por solicitud
    const offset = 0; // Comenzar desde el primer Pokémon
    const apiPokemons = [];

    while (apiPokemons.length < 649) {
      const response = await axios.get(
        `${URL_BASE}&offset=${offset}&limit=${limit}`
      );
      const results = response.data.results;

      const apiPokemonsUrl = await Promise.all(
        results.map(async (element) => {
          const response = await axios.get(element.url);
          return pokeData(response);
        })
      );

      apiPokemons.push(...apiPokemonsUrl);
      offset += limit; // Avanzar al siguiente lote de Pokémon
    }

    const pokemonsDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const totalPokemons = pokemonsDB.concat(apiPokemonsUrl);

    if (totalPokemons.length === 0) {
      return res.status(400).send("No se encontraron pokemons");
    }

    return res.status(200).json(totalPokemons);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    res.end();
  }
};

module.exports = getPokemons;
