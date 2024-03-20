
// TODO #import-html: use ES default imports to import game.component.html as template
// TODO #export-functions: remove the IIFE
import { parseUrl } from "../../scripts/utils";
import template from "./score.component.html";
import {Component} from "../../scripts/component";
import "./score.component.css";

// TODO #export-functions: export function ScoreComponent
// TODO #class: use the ES6 class keyword
/* class ScoreComponent constructor */
export class ScoreComponent  extends Component{
  // TODO #extends: call super(template)
  constructor() {
super(template)
    this.template = template;
    let params = parseUrl();
    // TODO #import-html: assign template to this.template
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }
  /* method ScoreComponent.init */
  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
}


