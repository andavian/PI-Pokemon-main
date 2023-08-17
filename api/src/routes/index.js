const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
const postPokemon = require("../controllers/postPokemon");
const getTypes = require("../controllers/getTypes");
const deletePokemon = require("../controllers/deletePokemon");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons/search", getPokemonByName);

router.get("/pokemons", getPokemons);

router.get("/pokemons/:id", getPokemonById);

router.post("/pokemons", postPokemon);

router.get("/types", getTypes);

router.delete("/pokemons/delete", deletePokemon);

module.exports = router;
