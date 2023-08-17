const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon } = require("../db");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async (req, res) => {
  const charName = req.query.charName;

  const apiPokemons = 100;
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
      const { id, name, sprites, stats, height, weight } = pokemon;
      return {
        id,
        name,
        image: sprites.other.dream_world.front_default,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
      };
    });

    const nameFinding = mapPokemons.filter(
      (character) => character.name.toLowerCase() === charName.toLowerCase()
    );
    //peticion a la base de datos
    const pokemonDB = await Pokemon.findAll({
      where: {
        name: charName,
        // {
        //   [Op.iLike]: `%${charName}%`,
        // },
      },
    });

    const totalPokemons = pokemonDB.concat(nameFinding);

    if (totalPokemons.length === 0) {
      return res.status(400).send("No existe pokemon con ese nombre");
    }

    return res.status(200).json(totalPokemons);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    res.end();
  }
};

module.exports = getPokemonByName;
