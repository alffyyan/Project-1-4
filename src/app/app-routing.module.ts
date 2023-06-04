import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { LokalComponent } from './beranda/lokal.component';
import { TerbatasComponent } from './datajson/terbatas.component';
import { FormComponent } from './pages/form/form.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

const routes: Routes = [
  {path:'Navi',component:NaviComponent},
  {path:'Lokal',component:LokalComponent},
  {path:'terbatas',component:TerbatasComponent},
  {path:'form',component:FormComponent},
  {path:'uploadfile',component:UploadfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
