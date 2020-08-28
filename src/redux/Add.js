// Action Types
export const ADD_FLOOR = 'ADD_FLOOR'

// Action Creators
floorID = 1;

export function addFloor(floor, index){
    return{
        type: ADD_FLOOR,
        index,
        floor
    }
}

// Reducer

const initial_State = []

function FloorReducer(state= initial_State, action){
    switch(action.type){
        case ADD_FLOOR:
            return[
                ...state,
                {
                    id: action.index,
                    floor: action.floor
                }
            ]
        default: return state
    }
}

export default FloorReducer