import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { ValuesService } from "../../../services/values.service";
import { Store } from "../../../model/store";

declare var $: any;

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.css"]
})
export class DocumentsComponent implements OnInit {
  //selectors
  @ViewChild("fileOriginalID") fileOriginalID;
  @ViewChild("fileProof") fileProof;
  @ViewChild("fileBirthCertificate") fileBirthCertificate;
  @ViewChild("fileCitizenship") fileCitizenship;
  @ViewChild("fileMarriage") fileMarriage;
  @ViewChild("filePermanentPermit") filePermanentPermit;
  @ViewChild("fileOldID") fileOldID;
  //updated documents
  documentPhoto: Boolean = false;
  documentBirth: Boolean = false;
  documentCitizen: Boolean = false;
  documentMarriage: Boolean = false;
  documentPermit: Boolean = false;
  documentOldID: Boolean = false;

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
        this.values.store.documentPhoto = fileName;
        this.documentPhoto = true;
        break;
      case 2:
        this.values.store.documentBirth = fileName;
        this.documentBirth = true;
        break;
      case 3:
        this.values.store.documentCitizen = fileName;
        this.documentCitizen = true;
        break;
      case 4:
        this.values.store.documentMarriage = fileName;
        this.documentMarriage = true;
        break;
      case 5:
        this.values.store.documentPermit = fileName;
        this.documentPermit = true;
        break;
      case 6:
        this.values.store.documentOldID = fileName;
        this.documentOldID = true;
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
    else if (name == "fileBirthCertificate") {
      this.fileBirthCertificate.nativeElement.value = "";
      this.documentBirth = false;
    } else if (name == "fileCitizenship") {
      this.fileCitizenship.nativeElement.value = "";
      this.documentCitizen = false;
    } else if (name == "fileMarriage") {
      this.fileMarriage.nativeElement.value = "";
      this.documentMarriage = false;
    } else if (name == "filePermanentPermit") {
      this.filePermanentPermit.nativeElement.value = "";
      this.documentPermit = false;
    } else if (name == "fileOldID") {
      this.fileOldID.nativeElement.value = "";
      this.documentOldID = false;
    }
  }
}
