import Box from './Box';
import React from 'react';
import { Button } from 'react-native';
import Text from './Text'

export default function Floor(index) {
    //keep re-rendering this state
    
  return (  
    <Box flexDirection='row' padding={20} >
        <Box flexDirection='column' border='solid' backgroundColor={index}
        paddingLeft={20} paddingRight={20}>
            <Button
                title={'            '}
            /> 
        </Box>
    </Box>
        
    
      ) 
  }
