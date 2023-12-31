const axios = require("axios");
const { Pokemon, Type } = require("../db");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    //peticion a la base de datos
    if (typeof id === "string" && id.length === 36) {
      const pokemonDB = await Pokemon.findOne({
        where: {
          id: id,
        },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      return pokemonDB.name
        ? res.status(200).json(pokemonDB)
        : res.status(400).send("No se encontro el pokemon solicitado");
    }

    //peticion a la API externa
    const { data } = await axios.get(`${URL_BASE}${id}`);

    const { name, sprites, stats, height, weight, types } = data;

    const pokemon = {
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

    return pokemon.name
      ? res.status(200).json(pokemon)
      : res.status(400).send("No se encontro el pokemon solicitado");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    res.end();
  }
};

module.exports = getPokemonById;
