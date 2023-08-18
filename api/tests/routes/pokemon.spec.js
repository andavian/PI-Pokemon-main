/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "charmander",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  hp: 39,
  attack: 52,
  defense: 43,
  speed: 65,
  height: 6,
  weight: 85,
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET /pokemons", () => {
    it("should get 200", () => agent.get("/pokemons/").expect(200));
  });

  describe("GET By id /pokemons/:id", () => {
    it("should get 200", () => agent.get(`/pokemons/1`).expect(200));
  });

  describe("DELETE /pokemons/delete", () => {
    it("should get 200", () =>
      agent
        .delete("/pokemons/delete")
        .query({ name: "charmander" })
        .expect(200));
  });

  describe("GET /types", () => {
    it("should get 200", () => agent.get("/types/").expect(200));
  });
});
