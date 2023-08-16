const axios = require("axios");
const { Pokemon } = require("../db");

const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
console.log("el codigo se esta ejecutando");
console.log(URL_BASE);

const getPokemonByName = async (req, res) => {
  console.log("aca empieza la asincronia");
  try {
    let name = "Pikachu";
    name = name.toLowerCase().trim();
    console.log(name);

    //peticion a la base de datos
    const pokemonDB = await Pokemon.findOne({
      where: {
        name: name,
      },
    });
    console.log(pokemonDB);

    //peticion a la API externa
    const { data } = await axios.get(`${URL_BASE}${name}`);
    console.log(data);

    const { id, sprites, stats, height, weight } = data;
    console.log(id);

    const pokemon = {
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
    console.log(pokemon.name);

    return pokemon.name
      ? res.status(200).json(pokemon)
      : pokemonDB.name
      ? res.status(200).json(pokemonDB)
      : res.status(400).send("No se encontro el pokemon solicitado");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    res.end();
  }
};

module.exports = getPokemonByName;
