import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { ImageService } from 'src/app/services/image.service';
import { Imagen } from 'src/app/models/Image';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  personaId: number = 1;
  id: any;
  addMode = true;
  currentSkill: Skill;
  imgSkill: string = '';

  constructor(private fb: FormBuilder,
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        porcentaje: ['', Validators.required],
        img: '',
      }
    );
    this.personaId = this.route.snapshot.params["personaId"];
    this.id = this.route.snapshot.params["id"];
    if (this.id != undefined) {
      this.getSkill(this.id);   
      this.addMode = false;
    }
  }

  getSkill(id: string): void {
    this.skillService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSkill = data;
          this.form.patchValue({
            nombre: this.currentSkill.nombre,
            porcentaje: this.currentSkill.porcentaje,
            img: this.currentSkill.img
          })
          console.log(data);
          if(this.currentSkill.img !== ''){
            this.imgSkill = this.currentSkill.img; 
          }
                   
        },
        error: (e) => console.error(e)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  create(): void {    
    this.skillService.create(this.personaId,this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  update(){
    console.log(JSON.stringify(this.form.value, null, 2));
    this.skillService.update(this.id,this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
  }

  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if(this.addMode){
      this.create();
    }else{
      this.update();
    }
  }


  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  uploadImageSkill($event: any){
    console.log('imagen de portada');
    const id = this.id;
    const name = "skill_" + id;
    this.imageService.uploadImage($event, name);
  }

  updateImage(){
    this.imgSkill = this.imageService.url;
    this.form.value.img = this.imgSkill;
    const imagen = new Imagen(this.imgSkill);
    this.skillService.updatePhoto(this.id, imagen)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert("Imagen guardada");
        },
        error: (e) => console.error(e)
      });    
  }
}
