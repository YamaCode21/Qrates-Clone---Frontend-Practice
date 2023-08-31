import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { BannerComponent } from './components/banner/banner.component';
import { StudioSectionComponent } from './components/studio-section/studio-section.component';
import { FansPhotosComponent } from './components/fans-photos/fans-photos.component';
import { FansSectionComponent } from './components/fans-section/fans-section.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { NavSubItemComponent } from './components/navbar/nav-sub-item/nav-sub-item.component';
import { TagComponent } from './components/tag/tag.component';
import { FooterOptionsColumnComponent } from './components/footer/footer-options-column/footer-options-column.component';
import { FansTemplateComponent } from './components/fans-template/fans-template.component';
import { MediaSocialsComponent } from './components/footer/media-socials/media-socials.component';
import { LanguageSelectorComponent } from './components/footer/language-selector/language-selector.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		NavbarComponent,
		MainComponent,
		ButtonComponent,
		BannerComponent,
		StudioSectionComponent,
		FansPhotosComponent,
		FansSectionComponent,
		NavItemComponent,
		NavSubItemComponent,
		TagComponent,
		FansTemplateComponent,
		FooterOptionsColumnComponent,
  MediaSocialsComponent,
  LanguageSelectorComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
