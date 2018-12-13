import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { LandingComponent } from "./components/landing/landing.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

//Create
import { PersonalDataComponent } from "./components/create/personal-data/personal-data.component";
import { PhysicalDataComponent } from "./components/create/physical-data/physical-data.component";
import { BirthDataComponent } from "./components/create/birth-data/birth-data.component";
import { AdresssComponent } from "./components/create/adresss/adresss.component";
import { DocumentsComponent } from "./components/create/documents/documents.component";
import { FinalPageComponent } from "./components/final-page/final-page.component";

//Duplicate
import { DuplicateComponent } from "./components/duplicate/duplicate.component";

//Update
import { AddressUpdateComponent } from "./components/update/address-update/address-update.component";
import { BirthDataUpdateComponent } from "./components/update/birth-data-update/birth-data-update.component";
import { DocumentsUpdateComponent } from "./components/update/documents-update/documents-update.component";
import { PersonalDataUpdateComponent } from "./components/update/personal-data-update/personal-data-update.component";
import { PhysicalDataUpdateComponent } from "./components/update/physical-data-update/physical-data-update.component";
//Correct
import { AddressCorrectComponent } from "./components/correct/address-correct/address-correct.component";
import { BirthDataCorrectComponent } from "./components/correct/birth-data-correct/birth-data-correct.component";
import { DocumentsCorrectComponent } from "./components/correct/documents-correct/documents-correct.component";
import { PersonalDataCorrectComponent } from "./components/correct/personal-data-correct/personal-data-correct.component";
import { PhysicalDataCorrectComponent } from "./components/correct/physical-data-correct/physical-data-correct.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "id-application/welcome", component: WelcomeComponent },
  { path: "id-application/appointment/details", component: FinalPageComponent },
  //Create
  {
    path: "id-application/create/form/personal-data",
    component: PersonalDataComponent
  },
  {
    path: "id-application/create/form/physical-data",
    component: PhysicalDataComponent
  },
  {
    path: "id-application/create/form/birth-data",
    component: BirthDataComponent
  },
  {
    path: "id-application/create/form/adress-data",
    component: AdresssComponent
  },
  {
    path: "id-application/create/form/upload-documents",
    component: DocumentsComponent
  },
  //Duplicate
  {
    path: "id-application/duplicate/confirmation",
    component: DuplicateComponent
  },

  //Update
  {
    path: "id-application/update/form/personal-data",
    component: PersonalDataUpdateComponent
  },
  {
    path: "id-application/update/form/physical-data",
    component: PhysicalDataUpdateComponent
  },
  {
    path: "id-application/update/form/birth-data",
    component: BirthDataUpdateComponent
  },
  {
    path: "id-application/update/form/adress-data",
    component: AddressUpdateComponent
  },
  {
    path: "id-application/update/form/upload-documents",
    component: DocumentsUpdateComponent
  },

  //Correct
  {
    path: "id-application/correct/form/personal-data",
    component: PersonalDataCorrectComponent
  },
  {
    path: "id-application/correct/form/physical-data",
    component: PhysicalDataCorrectComponent
  },
  {
    path: "id-application/correct/form/birth-data",
    component: BirthDataCorrectComponent
  },
  {
    path: "id-application/correct/form/adress-data",
    component: AddressCorrectComponent
  },
  {
    path: "id-application/correct/form/upload-documents",
    component: DocumentsCorrectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
