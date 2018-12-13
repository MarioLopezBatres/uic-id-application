import { Component, OnInit } from "@angular/core";
import { ValuesService } from "../../services/values.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-final-page",
  templateUrl: "./final-page.component.html",
  styleUrls: ["./final-page.component.css"]
})
export class FinalPageComponent implements OnInit {
  dateRange;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {
    this.setDate();
  }

  setDate() {
    let nameMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    //set date
    let myDate = new Date();
    let plusSeven = new Date(myDate.setDate(myDate.getDate() + 7));

    //formatString
    let day = plusSeven.getDate().toString();
    let month = plusSeven.getMonth().toString();

    if (plusSeven.getDate() < 10) {
      day = "0" + day;
    }

    if (plusSeven.getMonth() + 1 < 10) {
      month = "0" + (plusSeven.getMonth() + 1).toString();
    }

    let sMonth = nameMonths[month];
    this.dateRange = day + " " + sMonth + " " + plusSeven.getFullYear();
  }
}
