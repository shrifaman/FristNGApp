import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './admin/student/student.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",
  component:DashboardComponent,
    children:[
      
      {path:"student",component:StudentComponent}
  ]
  },
  {path:"**",component:PagenotfoundComponent,},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
