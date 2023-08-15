import { useState } from "react";
import image from "../../../../assets/pokeball.png";
import TextFieldController from "../../../../components/TextField/controler";
import SearchButton from "../../../../components/SearchButton";
import RandomButton from "../../../../components/RandomButton";
import {
  PokemonFormContainer as Container,
  PokemonFormPokeballImg as PokeballImg,
  PokemonFormButtonContainer as ButtonContainer,
} from "./styled";
import { FormProvider } from "react-hook-form";
import usePokemonForm from "./hooks/usePokemonForm";
const PokemonForm = () => {
  const { methods, onSubmit, data } = usePokemonForm();

  return (
    <Container>
      <FormProvider {...methods}>
        <PokeballImg src={image} alt="pokeball" />
        <TextFieldController name="pokemonName" label="pokemon id or name" />
        <input
          {...methods.register("random")}
          type="checkbox"
          name="random"
          hidden
        ></input>
        <ButtonContainer>
          <SearchButton
            onClick={() => {
              methods.setValue("random", false);
              onSubmit();
            }}
          />
          <RandomButton
            onClick={() => {
              methods.setValue("random", true);
              onSubmit();
            }}
          />
        </ButtonContainer>
      </FormProvider>
    </Container>
  );
};

PokemonForm.propTypes = {};

export default PokemonForm;
