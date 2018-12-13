import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
//Services
import { ValuesService } from "./services/values.service";

//Components
import { AppComponent } from "./app.component";
import { LandingComponent } from "./components/landing/landing.component";
import { FinalPageComponent } from "./components/final-page/final-page.component";
//Create
import { PersonalDataComponent } from "./components/create/personal-data/personal-data.component";
import { PhysicalDataComponent } from "./components/create/physical-data/physical-data.component";
import { BirthDataComponent } from "./components/create/birth-data/birth-data.component";
import { AdresssComponent } from "./components/create/adresss/adresss.component";
import { DocumentsComponent } from "./components/create/documents/documents.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PersonalDataComponent,
    PhysicalDataComponent,
    BirthDataComponent,
    AdresssComponent,
    DocumentsComponent,
    WelcomeComponent,
    FinalPageComponent,
    DuplicateComponent,
    AddressUpdateComponent,
    BirthDataUpdateComponent,
    DocumentsUpdateComponent,
    PersonalDataUpdateComponent,
    PhysicalDataUpdateComponent,
    AddressCorrectComponent,
    BirthDataCorrectComponent,
    DocumentsCorrectComponent,
    PersonalDataCorrectComponent,
    PhysicalDataCorrectComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
