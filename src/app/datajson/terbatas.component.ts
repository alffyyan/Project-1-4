import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-terbatas',
  template: `
  <h1>{{ app }}</h1>
    <ol>
      <li *ngFor="let guide of guides">
        {{ guide.title }} <br />
        {{ guide.body }} <br />
      </li>
  </ol>
  `,
  styleUrls: ['./terbatas.component.scss']
})
export class TerbatasComponent implements OnInit {
  app = 'JSON Data'
  guides: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.guides = data; // Assign the response data to the 'guides' array
    });
  }
}
