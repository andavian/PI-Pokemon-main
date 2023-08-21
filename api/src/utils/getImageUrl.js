const IMAGES_URL =
  "https://static.wikia.nocookie.net/my-singing-monsters-ideas/images";

const getImageUrl = (typeName) => {
  const imageUrls = {
    normal: `${IMAGES_URL}/3/33/Normal_Type_Icon.svg.png`,
    fighting: `${IMAGES_URL}/d/dd/Fighting_Type_Icon.svg.png`,
    flying: `${IMAGES_URL}/9/9b/Flying_Type_Icon.svg.png`,
    poison: `${IMAGES_URL}/9/93/Poison_Type_Icon.svg.png`,
    ground: `${IMAGES_URL}/3/3f/Ground_Type_Icon.svg.png`,
    rock: `${IMAGES_URL}/6/63/Rock_Type_Icon.svg.png`,
    bug: `${IMAGES_URL}/4/48/Bug_Type_Icon.svg.png`,
    ghost: `${IMAGES_URL}/e/e2/Ghost_Type_Icon.svg.png`,
    steel: `${IMAGES_URL}/b/b7/Steel_Type_Icon.svg.png`,
    fire: `${IMAGES_URL}/2/25/Fire_Type_Icon.svg.png`,
    water: `${IMAGES_URL}/d/dd/Water_Type_Icon.svg.png`,
    grass: `${IMAGES_URL}/6/6a/Grass_Type_Icon.svg.png`,
    electric: `${IMAGES_URL}/7/7d/Electric_Type_Icon.svg.png`,
    psychic: `${IMAGES_URL}/a/a3/Psychic_Type_Icon.svg.png`,
    ice: `${IMAGES_URL}/b/b5/Ice_Type_Icon.svg.png`,
    dragon: `${IMAGES_URL}/c/c9/Dragon_Type_Icon.svg.png`,
    dark: `${IMAGES_URL}/d/d5/Dark_Type_Icon.svg.png`,
    fairy: `${IMAGES_URL}/2/23/Fairy_Type_Icon.svg.png`,
    unknown:
      "https://images.vexels.com/media/users/3/152579/isolated/preview/a52ce2d4014c39b7b7c5974a1a1cbb85-icono-de-signo-de-interrogacion-de-circulo-naranja.png",
    shadow:
      "https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387_1280.png",
  };
  return (
    imageUrls[typeName] ||
    "https://images.vexels.com/media/users/3/152579/isolated/preview/a52ce2d4014c39b7b7c5974a1a1cbb85-icono-de-signo-de-interrogacion-de-circulo-naranja.png"
  );
};

module.exports = getImageUrl;
