import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { LokalComponent } from './beranda/lokal.component';
import { AsingComponent } from './asing/asing.component';
import { TerbatasComponent } from './datajson/terbatas.component';
import { ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './pages/form/form.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LokalComponent,
    AsingComponent,
    TerbatasComponent,
    FormComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
