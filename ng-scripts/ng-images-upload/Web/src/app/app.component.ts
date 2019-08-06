import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";
import {moveItemInArray, transferArrayItem, CdkDragDrop} from "@angular/cdk/drag-drop"
 
// Image model which also holds the upload progress and the file
class ImageFile {
  file: File;
  uploadProgress: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  images: ImageFile[] = []; //an array of valid images
  imageUrls: string[] = [];
  favourites: string[] = []; //an array of favorite image urls
  message: string = null; //a string to report the number of valid images
 
  constructor(private http : HttpClient) { } //depedency injection
  
  selectFiles = (event) => { //image upload handler
    this.images = [];
    let files : FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).name.match(/\.(jpg|jpeg|png|gif)$/)) { //image validity check
        this.images.push({file: files.item(i), uploadProgress: "0"});
      }
    }
    this.message = `${this.images.length} valid image(s) selected`;
  }

  uploadImages(){ //image upload hander
    this.images.map((image, index) => {
      const formData = new FormData();
      formData.append("image", image.file, image.file.name);
      return this.http.post('http://192.168.1.40:1100/uploadMulti', formData, {
        reportProgress: true,
        observe: "events"
      }).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress ) {
            image.uploadProgress = `${(event.loaded / event.total * 100)}%`;
          } 
          if (event.type === HttpEventType.Response) {
            
            this.imageUrls.push(event.body['data']);
          }
        });
    });
  }

  drop(event: CdkDragDrop<string[]>) { //cdkdrop event handler
    if (event.previousContainer !== event.container) {

      transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex, 
          event.currentIndex
      );
    } else {

      moveItemInArray(
          event.container.data,
          event.previousIndex, 
          event.currentIndex
      );
    }
  }
}