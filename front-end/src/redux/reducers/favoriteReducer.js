const initialState = {
    favorite: []
}

function favoriteReducer (state=initialState, action) {
    switch (action.type) {
        
        
        case "SET_FAVORITE":
            return {  favorite: [...state.favorite, action.payload]}
            
        case "DELETE_FAVORITE":
            return { favorite: [...state.favorite.filter(favs => favs !== action.payload) ]}
            
        

           
            

        default:
            return state;
    }
}

export default favoriteReducer;