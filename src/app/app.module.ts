import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Yeni import edilen ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// Modülünüzdeki tüm bileşenleri burada tanımlıyorsunuz
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    CartComponent,
    RegisterComponent ,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Reactive form modülünü buraya ekliyoruz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
