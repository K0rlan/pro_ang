import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {AboutComponent} from "./about/about.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {ExperienceComponent} from "./experience/experience.component";


const routes: Routes = [
  { path: 'services', component: ServicesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
