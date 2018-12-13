import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../services/values.service";
import { Store } from "../../model/store";
import { Store2 } from "../../model/store2";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  closeResult: String;
  isOpen: Boolean = false;

  constructor(private router: Router, private values: ValuesService) {}

  ngOnInit() {
    this.values.store = new Store();
    //this.values.store2 = new Store2();
    // The user can access this page only if the ID number has been provided.
    // Deactivate this check to test the application.
    /*if (!this.values.store.idNumber) {
      this.router.navigate(['']);
    }*/
  }

  resetStore() {
    this.values.store = new Store();
  }
}
