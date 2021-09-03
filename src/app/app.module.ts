import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbMenuModule,
  NbSidebarService,
  NbThemeModule,
} from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
} from '@nebular/theme';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { GameComponent } from './game/game.component';
import { DialogScoreComponent } from './dialog-score/dialog-score.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GameComponent,
    DialogScoreComponent,
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbIconModule,
    BrowserModule,
    NbCardModule,
    AppRoutingModule,
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
