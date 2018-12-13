import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Store } from "../model/store";
import { Store2 } from "../model/store2";

@Injectable()
export class ValuesService {
  store: Store = new Store();
  store2: Store2 = new Store2();

  constructor(private router: Router) {}

  // ###########################
  //      CREATE NAVIGATION
  // ###########################
  validateFormCreate(direction, forms, step) {
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, form => {
      form.addEventListener(
        "submit",
        event => {
          //Forward
          if (direction == "forward") {
            //Not correct => validation
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
            }
            //Corect
            else {
              this.nextFormCreate(step);
            }
          }
        },
        false
      );
    });
  }

  nextFormCreate(step) {
    switch (step) {
      case 1:
        this.router.navigate(["/id-application/create/form/physical-data"]);
        break;
      case 2:
        this.router.navigate(["/id-application/create/form/birth-data"]);
        break;
      case 3:
        this.router.navigate(["/id-application/create/form/adress-data"]);
        break;
      case 4:
        this.router.navigate(["/id-application/create/form/upload-documents"]);
        break;
      case 5:
      //this.router.navigate(["/id-application/create/form/physical-data"]);
    }
  }

  // ###########################
  //      CORRECT NAVIGATION
  // ###########################
  validateFormCorrect(direction, forms, step) {
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, form => {
      form.addEventListener(
        "submit",
        event => {
          //Forward
          if (direction == "forward") {
            //Not correct => validation
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
            }
            //Corect
            else {
              this.nextFormCorrect(step);
            }
          }
        },
        false
      );
    });
  }

  nextFormCorrect(step) {
    switch (step) {
      case 1:
        console.log("TEST");
        this.router.navigate(["/id-application/correct/form/physical-data"]);
        break;
      case 2:
        this.router.navigate(["/id-application/correct/form/birth-data"]);
        break;
      case 3:
        this.router.navigate(["/id-application/correct/form/adress-data"]);
        break;
      case 4:
        this.router.navigate(["/id-application/correct/form/upload-documents"]);
        break;
      case 5:
      //this.router.navigate(["/id-application/create/form/physical-data"]);
    }
  }

  // ###########################
  //      CORRECT NAVIGATION
  // ###########################
  validateFormUpdate(direction, forms, step) {
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, form => {
      form.addEventListener(
        "submit",
        event => {
          //Forward
          if (direction == "forward") {
            //Not correct => validation
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
            }
            //Corect
            else {
              this.nextFormUpdate(step);
            }
          }
        },
        false
      );
    });
  }

  nextFormUpdate(step) {
    switch (step) {
      case 1:
        console.log("TEST");
        this.router.navigate(["/id-application/update/form/physical-data"]);
        break;
      case 2:
        this.router.navigate(["/id-application/update/form/birth-data"]);
        break;
      case 3:
        this.router.navigate(["/id-application/update/form/adress-data"]);
        break;
      case 4:
        this.router.navigate(["/id-application/update/form/upload-documents"]);
        break;
      case 5:
      //this.router.navigate(["/id-application/create/form/physical-data"]);
    }
  }
}
