import React from 'react';
import { Button, SafeAreaView } from 'react-native'
import Box from '../utils/Box';
import Text from '../utils/Text';
import Card from '../utils/Card';
import Floor from '../utils/Floor';
import liftData from '../data/index';

import { useSelector } from 'react-redux';

function HomeScreen ({ navigation }) {
    
    const get_floor = useSelector(state => state)
    let [bg, setBG] = React.useState('')
    let [floor_0, setFloor_0] = React.useState('')
    let [floor_1, setFloor_1] = React.useState('')
    let [floor_2, setFloor_2] = React.useState('')
    let [floor_3, setFloor_3] = React.useState('')
    let [floor_4, setFloor_4] = React.useState('')
    let [floor_5, setFloor_5] = React.useState('')
    let [floor_6, setFloor_6] = React.useState('')

        
        const check_nav = [{"floor": '', "id": ''}]

        //sort array
            //up -> ascending
            //down -> descending
            let up_sort = get_floor;
            let up_filter = up_sort.filter(function(a){return a.floor != "down"});
                up_filter.sort(function(a,b){return a.id-b.id})


            let down_sort = get_floor;
            let down_filter = down_sort.filter(function(a){return a.floor != "up"});
                down_filter.sort(function(a,b){return b.id-a.id})

            //let current_floor = get_floor[i]; 
            //console.log(current_floor)
             
            let next = up_filter.concat(down_filter);
            let arr = next.concat(check_nav)

    function task (i){
        
            switch(i){
                            case 0: 
                                    setFloor_0('green');
                                    setTimeout(() => {
                                        setFloor_0('white')
                                    }, 1000)                         
                            break
        
                            case 1: 
                                    setFloor_1('green');
                                    setTimeout(() => {
                                        setFloor_1('white')
                                    }, 1000)
                                    
                            break
        
                            case 2: 
                                    setFloor_2('green');
                                    setTimeout(() => {
                                        setFloor_2('white')
                                    }, 1000)
                            break
        
                            case 3: 
                                    setFloor_3('green');
                                    setTimeout(() => {
                                        setFloor_3('white')
                                    }, 1000)
                            break

                            case 4: 
                                    setFloor_4('green');
                                    setTimeout(() => {
                                        setFloor_4('white')
                                    }, 1000)
                            break

                            case 5: 
                                    setFloor_5('green');
                                    setTimeout(() => {
                                        setFloor_5('white')
                                    }, 1000)
                            break

                            case 6: 
                                    setFloor_6('green');
                                    setTimeout(() => {
                                        setFloor_6('white')
                                    }, 1000)
                            break
        
            }        
                
    }

    function handle_Start(){
            for(i = 0; i < arr.length; i++){

                let current_floor = arr[i]
                setTimeout(() => {

                    console.log(current_floor)
                    if(current_floor.floor === 'up'){
                        task(current_floor.id)
                   }
       
                   else if (current_floor.floor === 'down'){
                       task(current_floor.id)
                    }
       
                    else {
                        navigation.navigate('Final',{
                            execute_arr: next
                        })
                    }

                }, 1000 * i)
                
            }
    }

    function handle_nav(){
        console.log("Ok")
    }
    return(
    <Box as={SafeAreaView} backgroundColor='white' flex={1}>
        
        <Box flexDirection='row' flex={1}>
            
            <Box flexDirection='column'>
                <Floor index={floor_6} />
                <Floor index={floor_5} />
                <Floor index={floor_4} />
                <Floor index={floor_3} />
                <Floor index={floor_2} />
                <Floor index={floor_1} />
                <Floor index={floor_0} />

                {/*}  { liftData.map((item, index) => 
                    <Floor key={index} move={index}/>
                )} */}

            </Box>

            <Box flexDirection='column' flex={1}>
                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={6}
                    floor_down={'Floor 6'}
                    floor_up={'            '}
                />

                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={5}
                    floor_down={'Floor 5'}
                    floor_up={'Floor 5'}
                />  

                    {/* {liftData.map((item, index) => 
                        <Card 
                            key={index}
                            up_index={item.name}
                            down_index={item.name}
                            index={index}
                        />
                    )} */}

                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={4}
                    floor_down={'Floor 4'}
                    floor_up={'Floor 4'}
                />

                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={3}
                    floor_down={'Floor 3'}
                    floor_up={'Floor 3'}
                />      
                    
                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={2}
                    floor_down={'Floor 2'}
                    floor_up={'Floor 2'}
                /> 
 
                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={1}
                    floor_down={'Floor 1'}
                    floor_up={'Floor 1'}
                />

                <Card 
                    down_index={'down'}
                    up_index={'up'}
                    index={0}
                    floor_down={'            '}
                    floor_up={'Floor G'}
                />  
            </Box>
        </Box>
        
        {next.map((item, index) => {
                                <Text key={index}> {item} </Text>
                            })
                        }
        
        <Box backgroundColor='yellow' 
            paddingTop={20} 
            paddingBottom={20}
            marginTop={10} 
            marginLeft={50} 
            marginRight={50}
            border='solid'> 
            <Button 
                title='Start Run'
                onPress={() => handle_Start()}>

            </Button>
        </Box>
    </Box>     
    )
}

export default HomeScreen