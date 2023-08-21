const axios = require("axios");
const { Type } = require("../db");
const getImageUrl = require("../utils/getImageUrl");

const TYPE_URL = "https://pokeapi.co/api/v2/type";

const getTypes = async (req, res) => {
  try {
    const typesBD = await Type.findAll();

    if (typesBD.length === 0) {
      const { data } = await axios.get(TYPE_URL);
      const typeNames = data.results.map((type) => type.name);
      const relevantData = typeNames.map((name) => ({
        name,
        image: getImageUrl(name),
      }));
      await Type.bulkCreate(relevantData);
      res.status(200).json(relevantData);
    } else {
      res.status(200).json(typesBD);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypes;
