import { Text as T } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  position,
  space,
  flexbox,
  margin,
  border,
  padding,
  shadow,
  background,
  borderRadius,
} from 'styled-system';

const Text = styled(T)(
  compose(
    color,
    size,
    typography,
    position,
    space,
    flexbox,
    margin,
    border,
    padding,
    shadow,
    background,
    borderRadius,
  ),
);

export default Text;