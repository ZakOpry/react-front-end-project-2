# YouBrew

YouBrew is a solo React front-end project that allows users to read through beer recipes and save their favorites.

Using the top nav bar, navigate to the "Recipes" page. You will be greeted with recipe cards.
This page gets rendered by using a useEffect which fetches data from a 3rd party API.
This data then gets sent to the Redux Global State. 
From there, the data is selected in my recipe component, then mapped over and passed down to my card component.
The card component then takes the data and specifies what data to render and where. 

Clicking on the "See More" button will trigger a local state function and a new Div gets rendered on the screen
showing more additional information. To close this, simply click the "back" button and the function will fire off
again reseting my local state variable to false and cause my ternary not to render the div. 

Clicking on the "Save" button will trigger a reducer and send the data of that card over to a "favorite state"
This data then gets selected in my "favorite" component and rendered on the favorite page. 

Navigating to the "Favorite" page, you'll see all the cards you've selected as favorites.
You can once again click on the "See More" to render out the "FavoritesCardAdditional" component in the same
fashion as on the recipe page. 
You can also select the "Remove" button to delete the specific card from the favorites page. 

# Mobile Responsive

YouBrew is also mobile responsive. I've used several media queries and flexbox wraps to ensure the site looks good on big and small screens alike.
The nav bar will be rerendered at a set screen width to turn into a "hamburger" style nav bar which makes it easier for viewing 
on smaller screen sizes. 
