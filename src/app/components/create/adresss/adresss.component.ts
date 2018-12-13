import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

@Component({
  selector: "app-adresss",
  templateUrl: "./adresss.component.html",
  styleUrls: ["./adresss.component.css"]
})
export class AdresssComponent implements OnInit {
  differentAddress: Boolean = false;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  onNavigate(direction) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    this.values.validateFormCreate(direction, forms, 4);
  }

  //Show hide the postal information
  checkAddress() {
    this.differentAddress = !this.differentAddress;
  }

  //Store the values of the inputs not to lose the data onBack
  setData(type, value) {
    if (type == "residenceStreet") this.values.store.residenceStreet = value;
    else if (type == "residenceCity") this.values.store.residenceCity = value;
    else if (type == "residencePostalCode")
      this.values.store.residencePostalCode = value;
    else if (type == "currentStreet") this.values.store.currentStreet = value;
    else if (type == "currentCity") this.values.store.currentCity = value;
    else if (type == "currentPostalCode")
      this.values.store.currentPostalCode = value;
  }
}
