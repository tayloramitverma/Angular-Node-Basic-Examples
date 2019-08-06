import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  uploadForm: FormGroup;
  uploadProgress: any;
  itemuploadProgress: any[] = [];
  formval = false;
  imagespath: any = [];
  imagespath1: any;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient ) {}

  openbrowser() {
    if(this.uploader.queue.length==0){
      this.formval = false;
    }else{
      this.formval = true;
    }
  }

  uploadSubmit(){

        if(this.uploader.queue.length==0){
          console.log('Please select files');
        }

        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;

          if (!fileItem.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            console.log("File type is not allowed.");
            return;
          }
          if(fileItem.size > 10000000){
            console.log("Each File should be less than 10 MB of size.");
            return;
          }

        }
        
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          this.uploadFile(data).subscribe(data => {
            if(data.body){
              this.imagespath.push(data.body.path);
            }
            
            if (data.type === HttpEventType.UploadProgress ) {
              this.uploadProgress = `${(data.loaded / data.total * 100)}%`;
            }
          });
        }
        this.imagespath1 = this.imagespath;
        this.uploader.clearQueue();
        
        
  }

  uploadFile(data: FormData): Observable<any> {
    //debugger
    return this.http.post<any>('http://192.168.1.40:3001/upload', data, {
      reportProgress: true,
      observe: "events"
    });
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, Validators.required]
    });
  }

}


