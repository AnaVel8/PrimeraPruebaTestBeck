import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestIntelComponent } from './test-intel/test-intel.component';
import { FormsModule } from '@angular/forms';
import { TestBeckComponent } from './test-beck/test-depre.component';
import { TestAnsiedadComponent } from './test-ansiedad/test-ansiedad.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'test',component: TestComponent},
  {path:'testAnsiedad',component: TestAnsiedadComponent},
  {path:'testBeck',component: TestBeckComponent},
  {path:'testInteligencias',component: TestIntelComponent},
  {path:'quienes',component: SobreNosotrosComponent},
  {path:'contacto',component: ContactoComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestIntelComponent,
    TestBeckComponent,
    TestAnsiedadComponent,
    HomeComponent,
    ContactoComponent,
    SobreNosotrosComponent,
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
