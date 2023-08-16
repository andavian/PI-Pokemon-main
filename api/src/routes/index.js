const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons/search", getPokemonByName);

router.get("/pokemons", getPokemons);

router.get("/pokemons/:id", getPokemonById);

router.post("/pokemons", (req, res) => {
  const pokemon = req.body;
  return res.status(201).send("pokemon creado con exito");
});

router.get("/types", (req, res) => {
  return res.status(200).send("esta ruta trae los tipos de pokemons");
});

module.exports = router;
