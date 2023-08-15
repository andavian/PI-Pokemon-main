const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
    });

    describe("image", () => {
      it("should throw an error if image is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid image")))
          .catch(() => done());
      });
      it("should work when its a valid image", () => {
        Pokemon.create({
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        });
      });
    });

    describe("hp", () => {
      it("should throw an error if hp is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid hp")))
          .catch(() => done());
      });
      it("should work when its a valid hp", () => {
        Pokemon.create({ hp: 54 });
      });
    });
    describe("attack", () => {
      it("should throw an error if attack is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid attack")))
          .catch(() => done());
      });
      it("should work when its a valid attack", () => {
        Pokemon.create({ attack: 64 });
      });
    });
    describe("defense", () => {
      it("should throw an error if defense is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid defense")))
          .catch(() => done());
      });
      it("should work when its a valid defense", () => {
        Pokemon.create({ defense: 54 });
      });
    });
    describe("speed", () => {
      it("should work when its a valid speed", () => {
        Pokemon.create({ speed: 54 });
      });
    });
    describe("height", () => {
      it("should work when its a valid height", () => {
        Pokemon.create({ height: 54 });
      });
    });
    describe("weight", () => {
      it("should work when its a valid weight", () => {
        Pokemon.create({ weight: 54 });
      });
    });
  });
});
