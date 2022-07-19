import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DistenationComponent } from './pages/distenation/distenation.component';
import { DestenationDetailsComponent } from './pages/distenation/destenation-details/destenation-details.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { CrewDetailsComponent } from './pages/crew/crew-details/crew-details.component';
import { TechnologyDetailsComponent } from './pages/technology/technology-details/technology-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DistenationComponent,
    DestenationDetailsComponent,
    CrewComponent,
    TechnologyComponent,
    CrewDetailsComponent,
    TechnologyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
