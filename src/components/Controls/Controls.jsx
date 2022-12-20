
import { List, Btn } from './Controls.styled';

export const Controls = ({obj, handleClick}) => {
  const keys = Object.keys(obj)
  return (
    <List>
      {keys.map(key => {
        return (
          <li key={key}>
            <Btn type="button" onClick={(e) => {handleClick(e)}}>
            {key}
            </Btn>
          </li>
        );
      })}
    </List>
  );
}
