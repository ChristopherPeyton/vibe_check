import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { CongratsComponent } from './congrats/congrats.component';
import { HomeComponent } from './home/home.component';
import { KickoutComponent } from './kickout/kickout.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "chuck-norris", component: ChuckNorrisComponent},
  {path: "kickout", component: KickoutComponent},
  {path: "congrats", component: CongratsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
