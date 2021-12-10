import { Component, OnInit } from '@angular/core';
import { Realisateur } from '../model/Realisateur';
import { RealisateurService } from '../services/realisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-realisateur',
  templateUrl: './add-realisateur.component.html'
})
export class AddRealisateurComponent implements OnInit {
newRealisateur = new Realisateur();
message :string;
constructor(private realisateurService: RealisateurService,
  private router :Router){ }

  
  addRealisateur(){
   
this.realisateurService.ajouterRealisateur(this.newRealisateur);  
this.router.navigate(["realisateur"]);
}
ngOnInit(): void {
}
  
}
