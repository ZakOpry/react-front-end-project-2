import { SetInitalBeerData } from "../action-types/ActionTypes";

const initialState = {
    beerData: []
}

function initialRecipeReducer (state=initialState, action) {
    switch (action.type) {
        
        case SetInitalBeerData:
            return  [{beerData: action.payload}]

        
            
    
        default:
            return state;
    }
}

export default initialRecipeReducer;