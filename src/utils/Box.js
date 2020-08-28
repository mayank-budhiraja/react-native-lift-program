import { View } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  position,
  space,
  flexbox,
  margin,
  border,
  padding,
  shadow,
  background,backgroundImage,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(
  compose(
    color,
    size,
    position,
    space,
    flexbox,
    margin,
    border,
    padding,
    shadow,
    background,backgroundImage, 
    borderRadius,
  ),
);

export default Box;