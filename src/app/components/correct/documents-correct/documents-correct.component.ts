import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

declare var $: any;

@Component({
  selector: "app-documents-correct",
  templateUrl: "./documents-correct.component.html",
  styleUrls: ["./documents-correct.component.css"]
})
export class DocumentsCorrectComponent implements OnInit {
  //selectors
  @ViewChild("fileOriginalID") fileOriginalID;
  @ViewChild("fileProof") fileProof;
  //updated documents
  documentProof: Boolean = false;

  constructor(private router: Router, public values: ValuesService) {}

  ngOnInit() {}

  validateFinalForm(direction) {
    var forms = document.getElementsByClassName("needs-validation");

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
              this.openForm();
            }
          }
        },
        false
      );
    });
  }

  openForm() {
    $("#feedbackModal").modal();
  }

  //Set to true when it has been uploaded. It will display the document in the final modal
  uploadDocument(document, value) {
    let fileName = this.getNameFile(value);
    switch (document) {
      case 1:
        this.values.store2.documentOldID = fileName;
        break;
      case 2:
        this.values.store2.documentProof = fileName;
        break;
    }
  }

  getNameFile(fullPath) {
    var startIndex =
      fullPath.indexOf("\\") >= 0
        ? fullPath.lastIndexOf("\\")
        : fullPath.lastIndexOf("/");
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
      filename = filename.substring(1);
    }
    return filename;
  }

  //Delete an input from the data base. I wont show it in the final modal
  resetInput(name) {
    if (name == "fileOriginalID") this.fileOriginalID.nativeElement.value = "";
    else if (name == "fileProof") this.fileProof.nativeElement.value = "";
  }
}
