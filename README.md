# Deck of Cards

[Check it out here](https://dlmedeiro.github.io/Deck-Of-Cards/)


Application that displays a deck of cards, one card at a time.

Utilizes the [Deck of Cards API](http://deckofcardsapi.com/) for the creation of a full deck of cards.

This project practices the use of React State. 

------------------------------

__Shuffle Cards:__

Pull a new deck of cards from the [Deck of Cards API](http://deckofcardsapi.com/)

------------------------------
__Draw Cards:__ 

When this button is clicked the page will draw one card every second.

These draws will continue until the __pause__ button is pressed, or until the deck has been exhausted, at which point the "no cards remaining" message will appear again. 

Automated drawing can be started and stopped as long as cards remain.

<!-- Every time this button is clicked a new card is displayed, until there are no cards left in the deck.

If the button is clicked when there are no cards remaining, an alert message will appear on the screen with the text “Error: no cards remaining!”. -->

------------------------------

__Re-Shuffle:__

Start over and pull a new deck of cards from the [Deck of Cards API](http://deckofcardsapi.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.