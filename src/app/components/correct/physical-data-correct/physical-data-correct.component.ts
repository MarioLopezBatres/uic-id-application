import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

@Component({
  selector: "app-physical-data-correct",
  templateUrl: "./physical-data-correct.component.html",
  styleUrls: ["./physical-data-correct.component.css"]
})
export class PhysicalDataCorrectComponent implements OnInit {
  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  onNavigate(direction) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    this.values.validateFormCorrect(direction, forms, 2);
  }

  //Store the values of the inputs not to lose the data onBack
  setData(type, value) {
    if (type == "gender") this.values.store2.gender = value;
    else if (type == "height") this.values.store2.height = value;
    else if (type == "color") this.values.store2.color = value;
  }
}
