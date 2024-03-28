import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { TestComponent } from './test/test.component';
import { TestIntelComponent } from './test-intel/test-intel.component';
import { TestBeckComponent } from './test-beck/test-depre.component';
import { TestAnsiedadComponent } from './test-ansiedad/test-ansiedad.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { ProgresBarComponent } from './shared/progres-bar/progres-bar.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { AdminsComponent } from './admins/admins.component';
//import { AdminsComponent } from './admins/admins.component';


const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'test',component: TestComponent},
  {path:'testAnsiedad',component: TestAnsiedadComponent},
  {path:'testBeck',component: TestBeckComponent},
  {path:'testInteligencias',component: TestIntelComponent},
  {path:'quienes',component: SobreNosotrosComponent},
  {path:'contacto',component: ContactoComponent},
  {path: 'usuarios',component: RegistroUsuariosComponent},
  {path: '',component: RegistroUsuariosComponent},
  {path: 'add', component: UsuarioEditarComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sigIn', component: RegistroAdminComponent},
  {path: 'edit/:id', component:UsuarioEditarComponent},
  {path: '**', redirectTo:'', pathMatch:'full'},

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
    LoginComponent,
    RegistroUsuariosComponent,
    UsuarioEditarComponent,
    ProgresBarComponent,
    RegistroAdminComponent
    //AdminsComponent,
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      //preventDuplicates: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
