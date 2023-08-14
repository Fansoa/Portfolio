import PropTypes from "prop-types";
import {
  ColumnStatsContainer as Container,
  ColumnStatsCaseContainer as CaseContainer,
  ColumnStatsCase as Case,
  ColumnStatsLabel as Label,
} from "./styled";

const ColumnStats = ({
  className,
  label,
  value,
  isFirstColumn,
  isLastColumn,
}) => {
  const stats = Array.from({ length: 15 }, (_, i) => {
    const isFirst = i === 0;
    const isChecked = value - 1 >= i;
    return (
      <Case
        key={`${label}-${i}`}
        isFirstColumn={isFirstColumn}
        isLastColumn={isLastColumn}
        isFirst={isFirst}
        isChecked={isChecked}
      />
    );
  });

  return (
    <Container className={className}>
      <CaseContainer>{stats}</CaseContainer>
      <Label>{label}</Label>
    </Container>
  );
};

ColumnStats.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Optional value
   */
  value: PropTypes.number,
  /**
   * Optional isFirstColumn
   */
  isFirstColumn: PropTypes.bool,
  /**
   * Optional isLastColumn
   */
  isLastColumn: PropTypes.bool,
};

export default ColumnStats;
