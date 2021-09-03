import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'game', component: GameComponent},
  { path: '', component: MainMenuComponent },
  { path: '**', component: MainMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  GameComponent,
  MainMenuComponent,
  LeaderboardsComponent,
  InstructionsComponent,
];
