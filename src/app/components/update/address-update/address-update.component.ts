import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

@Component({
  selector: "app-address-update",
  templateUrl: "./address-update.component.html",
  styleUrls: ["./address-update.component.css"]
})
export class AddressUpdateComponent implements OnInit {
  differentAddress: Boolean = false;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  onNavigate(direction) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    this.values.validateFormUpdate(direction, forms, 4);
  }

  //Show hide the postal information
  checkAddress() {
    this.differentAddress = !this.differentAddress;
  }

  //Store the values of the inputs not to lose the data onBack
  setData(type, value) {
    if (type == "residenceStreet") this.values.store2.residenceStreet = value;
    else if (type == "residenceCity") this.values.store2.residenceCity = value;
    else if (type == "residencePostalCode")
      this.values.store2.residencePostalCode = value;
    else if (type == "currentStreet") this.values.store2.currentStreet = value;
    else if (type == "currentCity") this.values.store2.currentCity = value;
    else if (type == "currentPostalCode")
      this.values.store2.currentPostalCode = value;
  }
}
