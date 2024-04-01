import template from "./welcome.component.html";
import {Component} from "../../scripts/component";
import "./welcome.component.css";
import { parseUrl } from "../../scripts/utils";

export class WelcomeComponent extends Component {
    constructor() {
        super(template)
        this.template = template;
        let params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
    }

    init() {
        let form = document.querySelector("form.form-signin");

        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    this.name = event.srcElement.querySelector("#nickname").value;
                    this.size = parseInt(event.srcElement.querySelector("#size").value);

                    let gamePage = "./#game";
                    window.location = `${gamePage}?name=${this.name}&size=${this.size}`;
                }
            },
            false
        );

        return this;
    };

}