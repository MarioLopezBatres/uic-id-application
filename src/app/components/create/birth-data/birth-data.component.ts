import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

@Component({
  selector: "app-birth-data",
  templateUrl: "./birth-data.component.html",
  styleUrls: ["./birth-data.component.css"]
})
export class BirthDataComponent implements OnInit {
  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  onNavigate(direction) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    this.values.validateFormCreate(direction, forms, 3);
  }

  //Store the values of the inputs not to lose the data onBack
  setData(type, value) {
    if (type == "date") this.values.store.date = value;
    else if (type == "country") this.values.store.country = value;
    else if (type == "place") this.values.store.place = value;
  }
}
