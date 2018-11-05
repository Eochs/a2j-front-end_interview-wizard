import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatStepperModule} from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardFormComponent } from './wizard-form/wizard-form.component';
import { WizardModalCardComponent } from './wizard-form/wizard-modal-card/wizard-modal-card.component';
import { UserDocumentsListComponent } from './user-documents-list/user-documents-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StepFormInputComponent } from './stepper/step-form-input/step-form-input.component';
import { StepperComponent } from './stepper/stepper.component';

/*==========
Material Imports
==========*/

const material_modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    AppComponent,
    WizardFormComponent,
    UserDocumentsListComponent,
    WizardModalCardComponent,
    StepFormInputComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [BrowserAnimationsModule],
    ...material_modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
