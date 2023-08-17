const { Pokemon } = require("../db");

const deletePokemon = async (req, res) => {
  const { name } = req.query;
  console.log(name);

  try {
    await Pokemon.destroy({
      where: { name: name },
    });
    const pokemons = await Pokemon.findAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deletePokemon;
