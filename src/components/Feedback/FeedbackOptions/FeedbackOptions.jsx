import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(value => (
        <BtnItem key={value}>
          <Button type="button" value={value} onClick={onLeaveFeedback}>
            {value[0].toUpperCase() + value.slice(1)}
          </Button>
        </BtnItem>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
