import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { AppRoutingModule } from './app-routing.module';

import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

  { path: '', pathMatch: "full", redirectTo: 'books' },
  { path: 'books', pathMatch: "full", redirectTo: 'books' },
  { path: 'available', pathMatch: "full", redirectTo: 'books/available' }


];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    UserProfileComponent,
    EditProfileComponent,
    BookListComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
