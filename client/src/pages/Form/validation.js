export default function validateForm(pokemonData, selectedTypes) {
  const errors = {};

  // Validación de nombre
  if (!pokemonData.name) {
    errors.name = "Name is required.";
  } else if (!/^[A-Z]+$/i.test(pokemonData.name)) {
    errors.name = "The name cannot contain numbers.";
  } else if (pokemonData.name.length > 20) {
    errors.name = "The name cannot be longer than 20 characters.";
  }

  // Validación de imagen
  if (!pokemonData.image) {
    errors.image = "Image is required.";
  } else if (
    !/^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([/?].*)?\.(jpg|jpeg|png|gif|svg)$/i.test(
      pokemonData.image
    )
  ) {
    errors.image = "The image URL must be correct and with a valid extension.";
  }

  //Validación de HP
  if (!pokemonData.hp) {
    errors.hp = "Health points are required.";
  } else if (!/^[0-9]+$/.test(pokemonData.hp)) {
    errors.hp = "Health points must be a number.";
  } else if (pokemonData.hp >= 260) {
    errors.hp = "Healt points must be less than 260";
  }

  //Validación de Atque
  if (!pokemonData.attack) {
    errors.attack = "Attack is required.";
  } else if (!/^[0-9]+$/.test(pokemonData.attack)) {
    errors.attack = "Attack must be a number.";
  } else if (pokemonData.attack >= 170) {
    errors.attack = "Attack must be less than 170";
  }

  //Validación de Defensa
  if (!pokemonData.defense) {
    errors.defense = "Defense is required.";
  } else if (!/^[0-9]+$/.test(pokemonData.defense)) {
    errors.defense = "defense must be a number.";
  } else if (pokemonData.defense >= 170) {
    errors.defense = "Defense must be less than 170";
  }

  //Validación de Velocidad
  if (!/^[0-9]+$/.test(pokemonData.speed)) {
    errors.speed = "Speed must be a number.";
  } else if (pokemonData.speed >= 200) {
    errors.speed = "Speed must be less than 200";
  }

  //Validación de Altura
  if (!/^[0-9]+$/.test(pokemonData.height)) {
    errors.height = "Height must be a number.";
  } else if (pokemonData.height >= 220) {
    errors.height = "Height must be less than 220";
  }

  //Validación de Peso
  if (!/^[0-9]+$/.test(pokemonData.weight)) {
    errors.weight = "Weight must be a number.";
  } else if (pokemonData.weight >= 10000) {
    errors.weight = "Weight must be less than 10000";
  }

  // Validación de selección de tipos
  // if (selectedTypes.length === 0) {
  //   errors.types = "Al menos un tipo es requerido";
  // }
  // if (selectedTypes.length > 2) {
  //   errors.types = "Solo se pueden seleccionar hasta dos tipos.";
  // }

  return errors;
}
