import PropTypes from "prop-types";
import {
  InfosContainer as Container,
  InfosLabelTextContainer as LabelTextContainer,
  InfosLabel as Label,
  InfosText as Text,
} from "./styled";

const Infos = ({ className, weight, height, abilities, description }) => {
  return (
    <Container className={className}>
      <LabelTextContainer>
        <Label>Weight</Label>
        <Text>{weight}</Text>
      </LabelTextContainer>
      <LabelTextContainer>
        <Label>Height</Label>
        <Text>{height}</Text>
      </LabelTextContainer>
      <LabelTextContainer>
        <Label>Abilities</Label>
        <Text>{abilities}</Text>
      </LabelTextContainer>
      <LabelTextContainer isColumn>
        <Label>Description</Label>
        <Text>{description}</Text>
      </LabelTextContainer>
    </Container>
  );
};

Infos.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional weight
   */
  weight: PropTypes.string,
  /**
   * Optional height
   */
  height: PropTypes.string,
  /**
   * Optional abilities
   */
  abilities: PropTypes.string,
  /**
   * Optional description
   */
  description: PropTypes.string,
};

export default Infos;
