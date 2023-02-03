import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/services/image.service';
import { Photo } from 'src/app/models/Photo';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{

  constructor(public imageService: ImageService,
    private personaService: PersonaService){

  }

  @Input() usuario: Usuario;
  @Input() isLogged: boolean = false;
  faPenToSquare = faPenToSquare;

  imgPortada: string = '';
  imgPerfil: string = '';

  changeProfileImage: boolean = false;
  changePortadaImage: boolean = false;

  uploadImagePortada($event: any){
    console.log('imagen de portada');
    const id = this.usuario.id;
    const name = "portada_" + id;
    this.imageService.uploadImage($event, name);
    this.changeProfileImage = false;
    this.changePortadaImage = true;
  }

  updatePortada(){
    this.imgPortada = this.imageService.url;
    this.usuario.imgPortada = this.imageService.url;
    const photos = new Photo(this.usuario.imgPerfil, this.usuario.imgPortada);
    this.personaService.updatePhotos(this.usuario.id, photos)
      .subscribe({
        next: (res) => {
          //console.log(res);
        },
        error: (e) => console.error(e)
      });
    alert('portada updated');
  }

  

  uploadImagePerfil($event: any){
    console.log('imagen de perfil');
    const id = this.usuario.id;
    const name = "usuario_" + id;
    this.imageService.uploadImage($event, name);   
    this.changePortadaImage = false;
    this.changeProfileImage = true;
  }

  updatePerfil(){
    this.imgPerfil = this.imageService.url;
    this.usuario.imgPerfil = this.imageService.url;
    const photos = new Photo(this.usuario.imgPerfil, this.usuario.imgPortada);
    this.personaService.updatePhotos(this.usuario.id, photos)
      .subscribe({
        next: (res) => {
          //console.log(res);
        },
        error: (e) => console.error(e)
      });
    alert('perfil updated');
  }
}
