import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navToMainMenu() {
    this.router.navigate(['/./']);
  }
  
}
