import React from 'react'

export default function Test() {
    const url = 'https://api.punkapi.com/v2/beers'

    async function getData() {

        const data = await fetch(url)
        const jsonData = await data.json()
        console.log(jsonData)
    
    }
    
    getData()


    return (
        <div>
            
        </div>
    )
}
