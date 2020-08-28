import React from 'react';
import { SafeAreaView, FlatList, TextInput} from 'react-native'
import Box from '../utils/Box';
import Text from '../utils/Text';

function Final_Output ({ route, navigation }) {

    let { execute_arr } = route.params

    const textInputComponents = execute_arr.map(type => <Text padding={10}>{type.id}</Text>)


    return(
            <Box as={SafeAreaView} backgroundColor='white' flex={1}>
                <Box flex={1} margin={5}>
                    <Text fontSize={30}> Order of Execution is</Text>
                    <Box flexDirection='row' justifyContent='center'>
                        {textInputComponents}
                    </Box>  
                </Box>
            </Box>      
    )
}

export default Final_Output