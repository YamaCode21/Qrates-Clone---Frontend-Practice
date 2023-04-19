import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { MenuComponent } from './menu/menu.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { ButtonComponent } from './button/button.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DesplegableComponent,
    MenuComponent,
    EtiquetasComponent,
    ButtonComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
