import PropTypes from "prop-types";
import ColumnStats from "./components/ColumnStats";
import { StatsContainer as Container } from "./styled";

const Stats = ({ className, hp, attack, defense, speA, speD, speed }) => {
  return (
    <Container className={className}>
      <ColumnStats label="Hp" value={hp} isFirstColumn />
      <ColumnStats label="Attack" value={attack} />
      <ColumnStats label="Defense" value={defense} />
      <ColumnStats label="SpeA" value={speA} />
      <ColumnStats label="SpeD" value={speD} />
      <ColumnStats label="Speed" value={speed} isLastColumn />
    </Container>
  );
};

Stats.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional hp
   */
  hp: PropTypes.number,
  /**
   * Optional attack
   */
  attack: PropTypes.number,
  /**
   * Optional defense
   */
  defense: PropTypes.number,
  /**
   * Optional speA
   */
  speA: PropTypes.number,
  /**
   * Optional speD
   */
  speD: PropTypes.number,
  /**
   * Optional speed
   */
  speed: PropTypes.number,
};

Stats.defaultProps = {
  className: null,
};

export default Stats;
