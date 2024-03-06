// TODO #import-html: use ES default imports to import welcome.html as template
// TODO #export-functions: remove the IIFE

// TODO #export-functions: export function WelcomeComponent
// TODO #class: use the ES6 class keyword
/* class WelcomeComponent constructor  */
import template from "../views/welcome.html";
import {Component} from "./component";

export class WelcomeComponent  extends Component{
    constructor() {

  // TODO #extends: call super(template)
        super(template)
    this.template = template;
  // TODO #import-html: assign template to this.template
}

// TODO #export-functions: remove this line
// put component in global scope, to be runnable right from the HTML.

// TODO #class: turn function into a method of WelcomeComponent
/* method WelcomeComponent.init */
init() {
  let form = document.querySelector("form.form-signin");

  form.addEventListener(
      "submit",
       (event) =>{
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.srcElement.querySelector("#nickname").value;
          let size = parseInt(event.srcElement.querySelector("#size").value);

          this._startGame(name, size);
        }
      },
      false
  );

  return this;
};

_startGame(name, size) {
  // TODO #spa: replace with './#game'
  let gamePage = "./#game";
    window.location = `${gamePage}?name=${name}&size=${size}`;
}
}