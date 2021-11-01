const initialState = {
    beerData: []
}

function initialRecipeReducer (state=initialState, action) {
    switch (action.type) {
        
        case "SET_INITIAL_BEER_DATA":
            return  [{beerData: action.payload}]

        
            
    
        default:
            return state;
    }
}

export default initialRecipeReducer;