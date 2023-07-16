import PropTypes from 'prop-types'
import { Checkbox, CustomCheckbox, LabelCheckboxCheckIcon, LabelCheckboxContainer, LabelCheckboxLabel } from './styled'

const LabelCheckbox = ({className, label, name, value, onChange}) => {

  return (
    <LabelCheckboxContainer className={className}>
        <CustomCheckbox onClick={() => onChange(!value)}>
          { value && <LabelCheckboxCheckIcon/>}
        </CustomCheckbox>
      <LabelCheckboxLabel htmlFor={name}>{label}</LabelCheckboxLabel>
      <Checkbox
        type='checkbox'
        checked={value}
        onChange={e => onChange(e.target.checked)}
        hidden
      />
    </LabelCheckboxContainer>
  )
}

LabelCheckbox.propTypes = {
  /**
   * Optional className
   */
  className: PropTypes.string,
  /**
   * Optional label
   */
  label: PropTypes.string,
  /**
   * Optional name
   */
  name: PropTypes.string,
  /**
   * Required value
   */
  value: PropTypes.bool.isRequired,
  /**
   * Required onChange
   */
  onChange: PropTypes.func.isRequired,
}

LabelCheckbox.defaultProps = {
  className: null,
  label: null,
}

export default LabelCheckbox