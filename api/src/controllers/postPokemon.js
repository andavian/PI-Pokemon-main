const { Pokemon } = require("../db");

const postPokemon = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } =
    req.body;
  console.log("body", req.body);

  try {
    if (!name || !image || !hp || !attack || !defense || !types)
      return res.status(401).json({ message: "faltan datos" });

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { name },
      defaults: { name, image, hp, attack, defense, speed, height, weight },
    });

    await pokemon.addTypes(types);

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemon;
