import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../services/values.service";
import { Store } from "../../model/store";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  isInvalid: Boolean = false;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {
    this.values.store = new Store();
  }

  validate() {
    const input = this.values.store.idNumber;
    if (!input || input.toString().length !== 11) {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
      this.router.navigate(["/id-application/welcome"]);
    }
  }

  //Forbid to enter keys different to digits
  onKeydown(event) {
    if (
      event.code === "KeyE" ||
      event.code === "NumpadDecimal" ||
      event.code === "NumpadSubtract" ||
      event.code === "NumpadAdd" ||
      event.code === "BracketRight" ||
      event.code === "Slash" ||
      event.code === "Period" ||
      event.code === "Comma"
    )
      event.preventDefault();
  }

  //Forbid to paste in the input
  avoidPaste(event) {
    event.preventDefault();
  }
}
