import { combineReducers } from "redux";
import initialRecipeReducer from "./initialRecipeReducer";
import favoriteReducer from "./favoriteReducer";




   export const rootReducer = combineReducers({

initialRecipeReducer,
favoriteReducer,

   })


