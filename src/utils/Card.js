import Box from './Box';
import React from 'react';
import { Button } from 'react-native';
import Text from './Text'
import { useDispatch } from 'react-redux'
import { addFloor } from '../redux/Add';

export default function Card({
                                up_index, down_index, 
                                index, 
                                floor_down, floor_up}) {
  
    //use redux to add floor number of state/array
    const dispatch = useDispatch()
    const send_floor = note => dispatch(addFloor(note, index))

  return (  
    <Box flexDirection='row' padding={20}>
      <Box flexDirection='column' border='solid' paddingLeft={20} paddingRight={20}>
            <Button
                title={floor_up}
                onPress={() => send_floor(up_index, index)}
            >  </Button>
      </Box>
      <Box flexDirection='column' border='solid' paddingLeft={20} paddingRight={20}>
          <Button
              title={floor_down}
              onPress={() => send_floor(down_index, index)}
          >  </Button>
      </Box>
    </Box>
      ) 
  }
