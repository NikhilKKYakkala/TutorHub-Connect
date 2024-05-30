import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Main/home-page/home-page.component';
import { InstitutePageComponent } from './Main/institute-page/institute-page.component';
import { TuitionCreationComponent } from './Main/tuition-creation/tuition-creation.component';
import { ProfileComponent } from './Main/profile/profile.component';
import { SubjectwiseSetupComponent } from './Main/subjectwise-setup/subjectwise-setup.component';
import { EnrollhereComponent } from './Main/enrollhere/enrollhere.component';
import { IndividualTuitionComponent } from './Main/individual-tuition/individual-tuition.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthGuard } from './Auth/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { StatusComponent } from './Main/status/status.component';
import { StudentprofileComponent } from './Main/studentprofile/studentprofile.component';



const routes: Routes = [
  { path: "",component:LandingComponent},
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Home",component:HomePageComponent,canActivate:[AuthGuard]},
  { path: "CreateProfile", component:ProfileComponent},
  { path: "Institute", component:InstitutePageComponent,canActivate:[AuthGuard]},
  { path: "TuitionCreation", component:TuitionCreationComponent},
  { path: "Tuition/:Tuitionid", component:IndividualTuitionComponent,canActivate:[AuthGuard]},
  { path: "Enrollhere", component:EnrollhereComponent,canActivate:[AuthGuard]},
  { path: "Subjectwise-setup", component:SubjectwiseSetupComponent,canActivate:[AuthGuard]},
  { path: "Status",component:StatusComponent,canActivate:[AuthGuard]},
  { path: "Profile",component:StudentprofileComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
