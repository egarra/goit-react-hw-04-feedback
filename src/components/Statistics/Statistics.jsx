import PropTypes from 'prop-types';
import { List, Item, Span } from './Statistics.styled';

export const Statistics = ({ obj }) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return (
    <List>
      {keys.map((key, i) => {
        return (
          <Item key={key}>
            <Span>{key}:</Span>
            <Span>{values[i]}</Span>
          </Item>
        );
      })}
    </List>
  );
};

Statistics.propTypes = {
  obj: PropTypes.object,
};
