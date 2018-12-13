import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

@Component({
  selector: "app-personal-data-correct",
  templateUrl: "./personal-data-correct.component.html",
  styleUrls: ["./personal-data-correct.component.css"]
})
export class PersonalDataCorrectComponent implements OnInit {
  isSingle: Boolean = true;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  onNavigate(direction) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    this.values.validateFormCorrect(direction, forms, 1);
  }

  checkMaritalStatus(value, maritalStatus) {
    this.isSingle = value;
    this.values.store2.maritalStatus = maritalStatus;
  }
}
