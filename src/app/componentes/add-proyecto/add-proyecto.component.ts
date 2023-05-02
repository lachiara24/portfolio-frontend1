import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { Imagen } from 'src/app/models/Image';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  form: FormGroup;
  titulo = 'Agregar';
  submitted = false;
  personaId: number = 1;
  id: any;
  addMode = true;
  currentProyecto: Proyecto;
  imgProyecto: string = '';

  constructor(private fb: FormBuilder,
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        demo: '',
        repo: '',
        img: ''
      }
    );
    this.personaId = this.route.snapshot.params["personaId"];
    this.id = this.route.snapshot.params["id"];
    if (this.id != undefined) {
      this.getProyecto(this.id);   
      this.addMode = false;
      this.titulo = 'Editar';
    }
  }

  getProyecto(id: string): void {
    this.proyectoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProyecto = data;
          this.form.patchValue({
            nombre: this.currentProyecto.nombre,
            descripcion: this.currentProyecto.descripcion,
            demo: this.currentProyecto.demo,
            repo: this.currentProyecto.repo,
            img: this.currentProyecto.img
          })
          console.log(data);
          if(this.currentProyecto.img !== ''){
            this.imgProyecto = this.currentProyecto.img; 
          }
        },
        error: (e) => console.error(e)
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  create(): void {
    console.log(JSON.stringify(this.form.value, null, 2));
    this.proyectoService.create(this.personaId,this.form.value)
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
    this.proyectoService.update(this.id,this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.imageService.url = '';
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

  uploadImageProyecto($event: any){
    console.log('imagen de portada');
    const id = this.id;
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name);
  }

  updateImage(){
    this.imgProyecto = this.imageService.url;
    this.form.value.img = this.imgProyecto;
    const imagen = new Imagen(this.imgProyecto);
    this.proyectoService.updatePhoto(this.id, imagen)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert("Imagen guardada");
        },
        error: (e) => console.error(e)
      });    
  }

}
