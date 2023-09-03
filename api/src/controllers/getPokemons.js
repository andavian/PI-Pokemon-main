const axios = require("axios");
const { Pokemon, Type } = require("../db");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (req, res) => {
  const apiPokemons = 120; //640
  const pokemons = [];

  try {
    const fetchPokemon = async (id) => {
      const response = await axios.get(`${URL_BASE}${id}`);

      return response.data;
    };

    const promises = [];
    for (let id = 1; id <= apiPokemons; id++) {
      promises.push(fetchPokemon(id));
    }

    const pagesData = await Promise.all(promises);
    pagesData.forEach((pageData) => {
      pokemons.push(pageData);
    });

    const mapPokemons = pokemons.map((pokemon) => {
      const { id, name, sprites, stats, height, weight, types } = pokemon;
      return {
        id,
        name,
        image: sprites.other.home.front_default,
        image2: sprites.other.dream_world.front_default,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
        types: types.map((item) => {
          const { name } = item.type;
          return { name };
        }),
      };
    });

    const pokemonsDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    }); //peticion a la base de datos

    const totalPokemons = pokemonsDB.concat(mapPokemons);

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
