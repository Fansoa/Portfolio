import { FormProvider, useForm } from "react-hook-form";
import TextFieldControler from ".";

// eslint-disable-next-line react/prop-types
const ControlProvider = ({ name, ...props }) => {
  const methods = useForm({ defaultValues: { [name]: "" } });
  return (
    <FormProvider {...methods}>
      <TextFieldControler name={name} {...props} />
    </FormProvider>
  );
};

export default {
  title: "Pokedex/TextField",
  component: TextFieldControler,
  args: {
    label: "pokemon name or id",
    name: "pokemonName",
  },
};

export const TextFieldControlerStory = {
  name: "TextFieldControler",
  render: (props) => <ControlProvider {...props} />,
};
