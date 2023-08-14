export const getBackgroundColorByElementType = ({ theme, elementType }) => {
  const backgroundColorByElementType = {
    normal: theme.pokedex.colors.mostlyDesaturatedDarkYellow,
    fire: theme.pokedex.colors.brightOrange,
    water: theme.pokedex.colors.softBlue,
    grass: theme.pokedex.colors.moderateGreen,
    electric: theme.pokedex.colors.brightYellow,
    ice: theme.pokedex.colors.slightlyDesaturatedCyan,
    fighting: theme.pokedex.colors.strongRed,
    poison: theme.pokedex.colors.darkModerateMagenta,
    ground: theme.pokedex.colors.softOrange,
    flying: theme.pokedex.colors.verySoftBlue,
    psychic: theme.pokedex.colors.softPink,
    bug: theme.pokedex.colors.moderateYellow2,
    rock: theme.pokedex.colors.moderateYellow,
    ghost: theme.pokedex.colors.mostlyDesaturatedDarkViolet,
    dark: theme.pokedex.colors.veryDarkGrayishOrange,
    dragon: theme.pokedex.colors.brightViolet,
    steel: theme.pokedex.colors.grayishBlue,
    fairy: theme.pokedex.colors.verySoftRed,
  };
  return backgroundColorByElementType[elementType];
};
