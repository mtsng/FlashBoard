// node_module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// project imports
import { AppComponent } from './app.component';
import { AppRoutes } from './router';
import { BrowseComponent } from './component/browse/browse.component';
import { CreateComponent } from './component/create/create.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { SignUpComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BrowseTopicComponent } from './component/browse/browseTopic/browseTopic.component';
import { TopicService } from './services/topic/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    BrowseTopicComponent,
    CreateComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
