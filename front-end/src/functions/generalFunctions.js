import { SetInitalBeerData } from "../redux/action-types/ActionTypes"

export const getData = async (dispatch) =>{
    const url = 'https://api.punkapi.com/v2/beers'
    const data = await fetch(url)
    const jsonData = await data.json()
    // console.log(jsonData)
    dispatch({type: SetInitalBeerData, payload: jsonData})
    

}

export const favoritePageSetting = (setTrueOrFalse, cardData) => {

    if (cardData.length > 0){
        setTrueOrFalse(true)

    }

    else {
        setTrueOrFalse(false)
    }

}