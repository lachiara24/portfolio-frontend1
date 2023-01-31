import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = "";

  constructor(private storage: Storage) { }

  // cuando subo la imagen ya guardo la url
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'images/' + name);
    uploadBytes(imgRef, file)
    .then(async response => {
      this.url = await getDownloadURL(imgRef);
    })
    .catch(error => console.error(error));
  }

  getURL(){
    return this.url;
  }

  // obtiene todas las imagenes subidas
  getImages(){
    const imagesRef = ref(this.storage, 'images');
    list(imagesRef)
    .then(async response => {
        for(let item of response.items){
          this.url = await getDownloadURL(item);
          console.log(this.url);          
        }
      })
    .catch(error => console.log(error));
  }
}
