// TODO #import-html: use ES default imports to import game.component.html as template
import { parseUrl } from "../../scripts/utils";
import template from "./game.component.html";
import { Component } from "../../scripts/component";
import { CardComponent } from "./card/card.component.js";
import "./game.component.css";



let environment = {
  api: {
    host: "http://localhost:8081",
  },
};

// TODO #export-functions: export function GameComponent
// TODO #class: use the ES6 class keyword
// TODO #extends: extend Component
/* class GameComponent constructor */
export class GameComponent extends Component{
  constructor() {

  // TODO #extends: call super(template)
    super(template)
  // gather parameters from URL
  let params = parseUrl();

  // TODO #import-html: assign template to this.template
  this.template = template;
  // save player name & game ize
  this._name = params.name;
  this._size = parseInt(params.size) || 9;
  this._flippedCard = null;
  this._matchedPairs = 0;
  }


// TODO #export-functions: remove this line
// put component in global scope, to be runnable right from the HTML.

// TODO #class: turn function into a method of GameComponent
/* method GameComponent.init */
async init() {
  // fetch the cards configuration from the server
  this._config = await this.fetchConfig();
  this._boardElement = document.querySelector(".cards");

        // create cards out of the config
        this._cards = [];
        this._cards = this._config.ids.map(id => new CardComponent(id));


         this._cards.forEach(card => {
           this._boardElement.appendChild(card.getElement());

           card.getElement().addEventListener(
               "click",
               () => this._flipCard(card)
           );
         });

        this.start();
};


/* method GameComponent.start */
start() {
  this._startTime = Date.now();
  let seconds = 0;
  document.querySelector("nav .navbar-title").textContent =
      `Player: ${this._name}. Elapsed time: ${seconds++}`;

  this._timer = setInterval(

       () => {
         document.querySelector("nav .navbar-title").textContent =
             `Player: ${this._name}. Elapsed time: ${seconds++}`;
       },
      1000
  );
};


  async fetchConfig() {
    return fetch(`${environment.api.host}/board?size=${this._size}`).then(
        (r) => r.json()
    );
  }

/* method GameComponent.goToScore */
goToScore() {
  let timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
  );
  clearInterval(this._timer);

  setTimeout(

       () => {
        // TODO #spa: replace with './#score'
        let scorePage = "./#score";
         window.location = `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
      },
      750
  );
};

/* method GameComponent._flipCard */
_flipCard(card) {
  if (this._busy) {
    return;
  }

  if (card.flipped) {
    return;
  }

  // flip the card
  card.flip();

  // if flipped first card of the pair
  if (!this._flippedCard) {
    // keep this card flipped and wait for the second card of the pair
    this._flippedCard = card;
  } else {
    // second card of the pair flipped...

    // if cards are the same
    if (card.equals(this._flippedCard)) {
      this._flippedCard.matched = true;
      card.matched = true;
      this._matchedPairs += 1;

      // reset flipped card for the next turn.
      this._flippedCard = null;

      if (this._matchedPairs === this._size) {
        this.goToScore();
      }
    } else {
      this._busy = true;

      // cards did not match
      // wait a short amount of time before hiding both cards
      setTimeout(

           () => {
            // hide the cards
            this._flippedCard.flip();
            card.flip();
            this._busy = false;

            // reset flipped card for the next turn.
            this._flippedCard = null;
          },
          500
      );
    }
  }
};

}
// TODO #card-component: Change images location to /app/components/game/card/assets/***.png
import back from "/src/app/components/game/card/assets/cards/back.png";
import card0 from "/src/app/components/game/card/assets/cards/card-0.png";
import card1 from "/src/app/components/game/card/assets/cards/card-1.png";
import card2 from "/src/app/components/game/card/assets/cards/card-2.png";
import card3 from "/src/app/components/game/card/assets/cards/card-3.png";
import card4 from "/src/app/components/game/card/assets/cards/card-4.png";
import card5 from "/src/app/components/game/card/assets/cards/card-5.png";
import card6 from "/src/app/components/game/card/assets/cards/card-6.png";
import card7 from "/src/app/components/game/card/assets/cards/card-7.png";
import card8 from "/src/app/components/game/card/assets/cards/card-8.png";
import card9 from "/src/app/components/game/card/assets/cards/card-9.png";

// TODO #import-assets: use ES default import to import images.
let CARDS_IMAGE = [
    back,
    card0,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
];


