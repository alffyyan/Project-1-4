import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormService } from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  messages: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private formService: FormService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.getMessages();
  }
  getMessages() {
    this.formService.getGuide()
      .subscribe(messages =>{
        this.messages = messages;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.http.post('http://localhost:3000/form', this.form.value)
      .subscribe((response) => {
        console.log('Message sent successfully', response);
        this.getMessages;
      });
  }
}


