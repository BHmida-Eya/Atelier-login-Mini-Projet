import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealisateursComponent } from './realisateurs/realisateurs.component';
import { AddRealisateurComponent } from './add-realisateur/add-realisateur.component';
import { UpdateRealisateurComponent} from './update-realisateur/update-realisateur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RealisateurGuard } from './realisateur.guard';
const routes: Routes = [
  {path :"realisateur", component : RealisateursComponent},
  {path : "add-realisateur", component : AddRealisateurComponent, canActivate:[RealisateurGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "realisateurs", pathMatch: "full" },
  {path: "updateRealisateur/:id", component: UpdateRealisateurComponent},
  {path: 'login', component: LoginComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
