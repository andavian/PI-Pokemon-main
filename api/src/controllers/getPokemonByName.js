const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db");

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
    types: poke.data.types.map((types) => types.type.name),
  };
};

const getPokemonByName = async (req, res) => {
  const charName = req.query.charName;

  try {
    const apiPokemons = (await axios.get(URL_BASE)).data.results;

    const nameFinding = await Promise.all(
      apiPokemons
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(charName.toLowerCase())
        )
        .map(async (element) => {
          const response = await axios.get(element.url);
          return pokeData(response);
        })
    );

    //peticion a la base de datos
    const pokemonDB = await Pokemon.findAll({
      where: {
        //name: charName,
        name: {
          [Op.iLike]: `%${charName}%`,
        },
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
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
