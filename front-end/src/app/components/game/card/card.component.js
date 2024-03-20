import {Component} from "../../../scripts/component";
import "./card.component.css";
import CARD_TEMPLATE from "./card.component.html";

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

// TODO #class: use the ES6 class keyword
// TODO #extends: extends Component
/* class CardComponent constructor */
export class CardComponent extends Component {
    constructor(id) {
        super(CARD_TEMPLATE)
        this._id = id;

        // TODO #extends: call super(CARD_TEMPLATE)
        // is this card flipped?
        this._flipped = false;
        this.template = CARD_TEMPLATE;

        // has the matching card has been discovered already?
        this.matched = false;

        this._elt = document.createElement("div");
        this._elt.innerHTML = this.template;
        this._elt = this._elt.firstElementChild;


        this._imageElt = this.getElement().querySelector(".card-wrapper");
        this._imageElt.querySelector("img.front-face").src =
            CARDS_IMAGE[this._id + 1];
        this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }


    /* method CardComponent.getElement */
    getElement() {
        return this._elt;
    };

// TODO #class: turn function into a method of CardComponent
    /* method CardComponent.flip */
    flip() {
        this._imageElt.classList.toggle("flip");
        this._flipped = !this._flipped;
    };

// TODO #class: turn function into a method of CardComponent
    /* method CardComponent.equals */
    equals(card) {
        return card._id === this._id;
    };

// TODO #class: turn function into a method of CardComponent
    /* CardComponent.get flipped() */

    get flipped() {
        return this._flipped;
    }
}
