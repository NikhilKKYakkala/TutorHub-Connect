import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS IMPORTS
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './Main/home-page/home-page.component';
import { InstitutePageComponent } from './Main/institute-page/institute-page.component';
import { TuitionCreationComponent } from './Main/tuition-creation/tuition-creation.component';
import { ProfileComponent } from './Main/profile/profile.component';
import { SubjectwiseSetupComponent } from './Main/subjectwise-setup/subjectwise-setup.component';
import { EnrollhereComponent } from './Main/enrollhere/enrollhere.component';
import { AuthInterceptor } from './Auth/auth-interceptor';
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";

//ANGULAR MATERIAL IMPORTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IndividualTuitionComponent } from './Main/individual-tuition/individual-tuition.component';
import { LandingComponent } from './landing/landing.component';
import { StatusComponent } from './Main/status/status.component';
import { MatDialogModule} from '@angular/material/dialog';
import { StudentprofileComponent } from './Main/studentprofile/studentprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    InstitutePageComponent,
    TuitionCreationComponent,
    ProfileComponent,
    SubjectwiseSetupComponent,
    EnrollhereComponent,
    IndividualTuitionComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    StatusComponent,
    StudentprofileComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
