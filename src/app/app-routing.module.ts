import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';  // LoginComponent'i buraya ekleyin
import { RegisterComponent } from './register/register.component'; // RegisterComponent'i de ekleyin


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Varsayılan olarak login'e yönlendir
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-page/:name', component: ProductPageComponent },
  { path: 'product-detail/:name/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
