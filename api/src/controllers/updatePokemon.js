const { Pokemon } = require("../db");

const updatePokemon = async (req, res) => {
  const { id } = req.params; // Obtén el ID del Pokémon de los parámetros de la ruta
  const updatedData = req.body; // Obtén los datos actualizados del cuerpo de la solicitud

  try {
    // Busca el Pokémon por su ID
    const pokemon = await Pokemon.findOne({
      where: {
        id: id,
      },
    });

    if (!pokemon) {
      return res.status(404).json({ message: "No se encontró el Pokémon" });
    }

    // Actualiza los datos del Pokémon
    await pokemon.update(updatedData);

    // Retorna el Pokémon actualizado
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePokemon;
