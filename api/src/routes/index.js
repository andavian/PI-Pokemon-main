const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", (req, res) => {
  return res.status(200).send("esta ruta trae los pokemons");
});

router.get("/pokemons/:id", (req, res) => {
  const { id } = parseInt(req.params);
  return res.status(200).send("esta ruta trae el detalle de cada pokemon");
});

router.get("/pokemons", (req, res) => {
  const { name } = req.query;
  console.log("nombre", name);

  if (name === "prueba")
    return res.status(200).send("esta ruta trae los pokemons por nombre");
});

router.post("/pokemons", (req, res) => {
  const pokemon = req.body;
  return res.status(201).send("pokemon creado con exito");
});

router.get("/types", (req, res) => {
  return res.status(200).send("esta ruta trae los tipos de pokemons");
});

module.exports = router;
