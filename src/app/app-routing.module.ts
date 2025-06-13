import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

// const routes: Routes = [
//   { 
//     path: "directivas",
//     component: DirectivasComponent
//   }
// ];
const routes: Routes = [
  { 
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "contacto",
        component: ContactComponent
      },  
      {
        path: "directivas",
        component: DirectivasComponent
      },
      {
        path: "",
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
