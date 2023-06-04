import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadfile',
  template: `
    <input type="file" (change)="onFileSelected($event)">
    <button type="button" (click)="onUpload()">Upload</button>
  `
})
export class UploadfileComponent {
  selectedFile!: File;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3000/upload', uploadData)
      .subscribe(response => {
        console.log('File uploaded successfully');
      });
  }
}


