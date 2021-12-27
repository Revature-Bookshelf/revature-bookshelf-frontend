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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
