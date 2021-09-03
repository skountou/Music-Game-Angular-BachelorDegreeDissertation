import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // we also need angular router for Nebular to function properly

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navToInstructions() {
    this.router.navigate(['/instructions']);
  }
  navToLeaderboards() {
    this.router.navigate(['/leaderboards']);
  }
  navToGame() {
    this.router.navigate(['/game']);
  }
}
