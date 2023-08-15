import * as yup from "yup";

export const pokemonFormSchema = yup.object({
  pokemonName: yup.string(),
  random: yup.boolean().required(),
});
