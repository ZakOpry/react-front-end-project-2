import { SetFavorite, DeleteFavorite } from "../action-types/ActionTypes";

const initialState = {
    favorite: []
}

function favoriteReducer (state=initialState, action) {
    switch (action.type) {
        
        
        case SetFavorite:
            return {  favorite: [...state.favorite, action.payload]}
            
        case DeleteFavorite:
            return { favorite: [...state.favorite.filter(favs => favs !== action.payload) ]}
            
        

           
            

        default:
            return state;
    }
}

export default favoriteReducer;