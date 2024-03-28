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

export class GameComponent extends Component{
  constructor() {

    super(template)
  let params = parseUrl();

  this.template = template;
  this._name = params.name;
  this._size = parseInt(params.size) || 9;
  this._flippedCard = null;
  this._matchedPairs = 0;
  }

/* method GameComponent.init */
async init() {
  this._config = await this.fetchConfig();
  this._boardElement = document.querySelector(".cards");

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


goToScore() {
  let timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
  );
  clearInterval(this._timer);

  setTimeout(

       () => {
        let scorePage = "./#score";
         window.location = `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
      },
      750
  );
};

_flipCard(card) {
  if (this._busy) {
    return;
  }

  if (card.flipped) {
    return;
  }

  card.flip();

  if (!this._flippedCard) {
    this._flippedCard = card;
  } else {

    if (card.equals(this._flippedCard)) {
      this._flippedCard.matched = true;
      card.matched = true;
      this._matchedPairs += 1;

      this._flippedCard = null;

      if (this._matchedPairs === this._size) {
        this.goToScore();
      }
    } else {
      this._busy = true;

      setTimeout(

           () => {
            this._flippedCard.flip();
            card.flip();
            this._busy = false;
            this._flippedCard = null;
          },
          500
      );
    }
  }
};

}
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


