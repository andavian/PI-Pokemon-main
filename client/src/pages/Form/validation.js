export default function validateForm(pokemonData) {
  const errors = {};

  // Validación de nombre
  if (!pokemonData.name) {
    errors.name = "El nombre es requerido.";
  } else if (!/^[A-Z]+$/i.test(pokemonData.name)) {
    errors.name = "El nombre no puede contener números.";
  } else if (pokemonData.name.length > 20) {
    errors.name = "El nombre no puede tener más de 20 caracteres.";
  }

  // Validación de imagen
  if (!pokemonData.image) {
    errors.image = "La imagen es requerida.";
  } else if (
    !/^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([/?].*)?\.(jpg|jpeg|png|gif|svg)$/i.test(
      pokemonData.image
    )
  ) {
    errors.image = "El archivo de imagen debe tener la extensión correcta.";
  }

  //Validación de HP
  if (!pokemonData.hp) {
    errors.hp = "Los puntos de salud son requeridos.";
  } else if (!/^[0-9]+$/.test(pokemonData.hp)) {
    errors.hp = "Solo número.";
  }

  //Validación de Atque
  if (!pokemonData.attack) {
    errors.attack = "Los puntos de atque son requeridos.";
  } else if (!/^[0-9]+$/.test(pokemonData.attack)) {
    errors.attack = "Solo número.";
  }

  //Validación de Defensa
  if (!pokemonData.defense) {
    errors.defense = "Los puntos de defensa son requeridos.";
  } else if (!/^[0-9]+$/.test(pokemonData.defense)) {
    errors.defense = "Solo número.";
  }

  //Validación de Velocidad
  if (!/^[0-9]+$/.test(pokemonData.speed)) {
    errors.speed = "Solo número.";
  }

  //Validación de Altura
  if (!/^[0-9]+$/.test(pokemonData.height)) {
    errors.height = "Solo número.";
  }

  //Validación de Peso
  if (!/^[0-9]+$/.test(pokemonData.weight)) {
    errors.weight = "Solo número.";
  }

  return errors;
}
