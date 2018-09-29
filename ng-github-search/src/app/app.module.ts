import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { GistsListComponent } from './components/gists-list/gists-list.component';
import { GithubStore } from './store/github.store';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProfileComponent,
    ReposListComponent,
    GistsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ GithubStore ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
