import PropTypes from 'prop-types';
import { Label, InputFilter } from './Filter.styled';



export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      {' '}
      Find contacts by name
      <InputFilter type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};