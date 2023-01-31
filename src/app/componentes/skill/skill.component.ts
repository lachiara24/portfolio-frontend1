import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/Skill';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  isLogged: boolean = false;
  
  skill?: Skill[];
  
  personaId: string = '1';

  constructor(private skillService: SkillService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.personaId = this.tokenService.getPersonaId();
    }      
    this.retrieveSkills(); 
  }

  retrieveSkills(): void {
    this.skillService.getAll(this.personaId)
      .subscribe({
        next: (data) => {
          this.skill = data;
          // console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  delete(item: Skill){
    this.skillService.delete(this.personaId, item.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }


  faPlus = faPlus;
}
